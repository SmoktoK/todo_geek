from django.contrib import admin

# Register your models here.
from TODO.models import Project, Note

admin.site.register(Project)
admin.site.register(Note)
