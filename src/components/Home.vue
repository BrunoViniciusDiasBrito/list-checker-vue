<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <!--Solução 1 -->
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
      <!--Solução 1 / -->

      <!--Solução 2 - alt -->
      <!-- <div v-for="project in projects" :key="project.id">
        <div v-if="current === 'all'">
          <SingleProject
            :project="project"
            @delete="handleDelete"
            @complete="handleComplete"
          />
        </div>

        <div v-if="current === 'completed'">
          <div v-if="project.complete === true">
            <SingleProject
              :project="project"
              @delete="handleDelete"
              @complete="handleComplete"
            />
          </div>
        </div>

        <div v-if="current === 'ongoing'">
          <div v-if="project.complete === false">
            <SingleProject
              :project="project"
              @delete="handleDelete"
              @complete="handleComplete"
            />
          </div>
        </div>
      </div> -->
      <!--Solução 2 - alt / -->
    </div>

    <div v-else>
      <p>Carregando conteudo</p>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject";
import FilterNav from "../components/FilterNav";
import dataFetch from "../mixins/dataFech";
export default {
  mixins: [dataFetch],
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter(project => {
        return project.id !== id;
      });
    },
    handleComplete(id) {
      let selectedProject = this.projects.find(project => {
        return project.id === id;
      });

      selectedProject.complete = !selectedProject.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter(project => project.complete);
      }

      if (this.current === "ongoing") {
        return this.projects.filter(project => !project.complete);
      }

      return this.projects;
    },
  },
};
</script>

<style></style>
