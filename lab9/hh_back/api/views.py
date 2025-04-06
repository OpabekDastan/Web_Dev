from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response    
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Company, Vacancy    
from .serializers import CompanySeriazer, VacancySerializer 

# Create your views here.

@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySeriazer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({"ERROR: Company doesnt found 404"}, status=status.HTTP_404_NOT_FOUND)
    serializer = CompanySeriazer(company)
    return Response(serializer.data)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response({"ERROR: Vacancy 404 page not found"}, status=status.HTTP_404_NOT_FOUND)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return Response({"ERROR: Vacancy 404 page not found"}, status=status.HTTP_404_NOT_FOUND)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)

@api_view(['GET'])      
def vacancy_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
