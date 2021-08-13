const data = {
  mounted() {
    fetch("http://localhost:3000/projects")
      .then(res => res.json())
      .then(data => (this.projects = data))
      .catch(err => console.log(err));
  },
};

export default data;
