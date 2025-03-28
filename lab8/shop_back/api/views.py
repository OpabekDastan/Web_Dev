import json
from django.http import JsonResponse, HttpResponseNotFound
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    data = [{
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category": p.category.name
    } for p in products]
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    try:
        p = Product.objects.get(pk=id)
        data = {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category.name
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return HttpResponseNotFound('Product not found')

def category_list(request):
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    try:
        c = Category.objects.get(pk=id)
        data = {"id": c.id, "name": c.name}
        return JsonResponse(data)
    except Category.DoesNotExist:
        return HttpResponseNotFound('Category not found')

def products_by_category(request, id):
    try:
        category = Category.objects.get(pk=id)
        products = category.products.all()
        data = [{
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
        } for p in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return HttpResponseNotFound('Category not found')
