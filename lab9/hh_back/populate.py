import os
import django
import random

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hh_back.settings")
django.setup()

from api.models import Company, Vacancy

def populate():
    cities = ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Павлодар']
    company_names = ['TechStar', 'MegaSoft', 'QazaqCode', 'StepDev', 'FutureLine']

    for i in range(5):
        company = Company.objects.create(
            name=company_names[i],
            description='Описание компании ' + company_names[i],
            city=cities[i],
            address=f'Улица {i+1}, дом {random.randint(1, 100)}'
        )

        for j in range(3):
            Vacancy.objects.create(
                name=f'Вакансия {j+1} в {company.name}',
                description='Описание вакансии',
                salary=random.randint(100000, 800000),
                company=company
            )

    print("✅ Фейковые компании и вакансии успешно добавлены!")

if __name__ == '__main__':
    populate()
