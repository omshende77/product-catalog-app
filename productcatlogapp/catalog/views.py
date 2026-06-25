from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render


class CategoryViewSet(ModelViewSet):
    pagination_class = None
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [IsAuthenticated]
    

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # permission_classes = [IsAuthenticated]
    filterset_fields = ['category']
    
    search_fields = [
        'name',
        'description',
    ]
    
def dashboard(request):
    return render(request, "dashboard.html")