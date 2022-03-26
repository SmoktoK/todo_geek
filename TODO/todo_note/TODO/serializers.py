from rest_framework.serializers import HyperlinkedModelSerializer

from TODO.models import Project, Note


class ProjectModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'  # The model is custom built so we need all the fields we put there


class NoteModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
