// import { useState, useEffect } from "react";
// import api from "./services/api";

// function App() {
//   const [editingId, setEditingId] = useState(null);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");

//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);

//   const [loading, setLoading] = useState(true);

//   // Fetch Products
//   const fetchProducts = async () => {
//     try {
//       const response = await api.get("products/");
//       setProducts(response.data.results);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Load Products
//   useEffect(() => {
//     const loadProducts = async () => {
//       await fetchProducts();
//       setLoading(false);
//     };

//     loadProducts();
//   }, []);

//   // Load Categories
//   useEffect(() => {
//     api
//       .get("categories/")
//       .then((response) => {
//         setCategories(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // Add Product
//   const addProduct = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post("products/", {
//         category,
//         name,
//         description,
//         price,
//       });

//       await fetchProducts();

//       setName("");
//       setDescription("");
//       setPrice("");
//       setCategory("");

//       alert("Product Added Successfully!");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Update Product
//   const updateProduct = async (e) => {
//     e.preventDefault();

//     try {
//       await api.put(`products/${editingId}/`, {
//         category,
//         name,
//         description,
//         price,
//       });

//       await fetchProducts();

//       setEditingId(null);

//       setName("");
//       setDescription("");
//       setPrice("");
//       setCategory("");

//       alert("Product Updated Successfully!");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Delete Product
//   const deleteProduct = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?",
//     );

//     if (!confirmDelete) return;

//     try {
//       await api.delete(`products/${id}/`);

//       await fetchProducts();

//       alert("Product Deleted Successfully!");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Fill form for editing
//   const editProduct = (product) => {
//     setEditingId(product.id);

//     setName(product.name);
//     setDescription(product.description);
//     setPrice(product.price);
//     setCategory(product.category);
//   };

//   if (loading) {
//     return <h2>Loading Products...</h2>;
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <form onSubmit={editingId ? updateProduct : addProduct}>
//         <h2>{editingId ? "Edit Product" : "Add Product"}</h2>

//         <input
//           type="text"
//           placeholder="Product Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="number"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />

//         <br />
//         <br />

//         <select value={category} onChange={(e) => setCategory(e.target.value)}>
//           <option value="">Select Category</option>

//           {categories.map((cat) => (
//             <option key={cat.id} value={cat.id}>
//               {cat.name}
//             </option>
//           ))}
//         </select>

//         <br />
//         <br />

//         <button type="submit">
//           {editingId ? "Update Product" : "Add Product"}
//         </button>

//         {editingId && (
//           <>
//             {" "}
//             <button
//               type="button"
//               onClick={() => {
//                 setEditingId(null);
//                 setName("");
//                 setDescription("");
//                 setPrice("");
//                 setCategory("");
//               }}
//             >
//               Cancel
//             </button>
//           </>
//         )}
//       </form>

//       <hr />

//       <h1>Product Catalog</h1>

//       {products.length === 0 ? (
//         <p>No Products Found</p>
//       ) : (
//         products.map((product) => (
//           <div key={product.id}>
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>₹{product.price}</p>
//             <p>
//               <strong>Category:</strong> {product.category}
//             </p>
//             <button onClick={() => editProduct(product)}>Edit</button>{" "}
//             <button onClick={() => deleteProduct(product.id)}>Delete</button>
//             <hr />
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
