import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e15af9c9a0ea2099d0679b6f6c7086583c82a2fc5b56dd76534b297a95037fe0"
  }
});
