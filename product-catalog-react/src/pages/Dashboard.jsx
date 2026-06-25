import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [editingId, setEditingId] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await api.get("products/");

      console.log("Products API Response:", response.data);
      console.log("Is Array?", Array.isArray(response.data));

      setProducts(response.data.results || response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get("categories/");
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setEditingId(null);
    setName("");
    setDescription("");
    setPrice("");
    setCategory("");
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await api.post("products/", {
        category,
        name,
        description,
        price,
      });

      await fetchProducts();
      clearForm();

      alert("Product Added");
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      await api.put(`products/${editingId}/`, {
        category,
        name,
        description,
        price,
      });

      await fetchProducts();
      clearForm();

      alert("Product Updated");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`products/${id}/`);

      await fetchProducts();

      alert("Product Deleted");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/");
  };

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  return (
    <div>
      <h1>Product Catalog Dashboard</h1>

      <button onClick={logout}>Logout</button>

      <hr />

      <form onSubmit={editingId ? updateProduct : addProduct}>
        <h2>{editingId ? "Edit Product" : "Add Product"}</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <br />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>

          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <br />
        <br />

        <button type="submit">
          {editingId ? "Update Product" : "Add Product"}
        </button>

        {editingId && (
          <>
            {" "}
            <button type="button" onClick={clearForm}>
              Cancel
            </button>
          </>
        )}
      </form>

      <hr />

      <h2>Products</h2>

      {Array.isArray(products) &&
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <p>Category: {product.category_name}</p>
            <button
              onClick={() => {
                setEditingId(product.id);
                setName(product.name);
                setDescription(product.description);
                setPrice(product.price);
                setCategory(product.category);
              }}
            >
              Edit
            </button>{" "}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <hr />
          </div>
        ))}
    </div>
  );
}

export default Dashboard;
