import axios, { AxiosInstance } from "axios";
import store from "./store";
import router from "./routes";
export class Client {
  client: AxiosInstance;
  ogFileId = ""
  fileId = "";

  constructor() {
    //@ts-ignore
    this.ogFileId = store.state.user.fileId
    this.client = axios.create({
      baseURL: `https://api.figma.com/v1/`,
      //@ts-ignore
      headers: { "X-Figma-Token": store.state.user.token },
    });
    //@ts-ignore
    this.fileId = store.state.user.fileId;
  }

  restoreMainFileId() {
    this.fileId = this.ogFileId
  }

  setBranchId(branchId: string) {
    this.fileId = branchId
  }

  async getNode(nodeId: string) {
    return this.client
      .get(`files/${this.fileId}/nodes?ids=${nodeId}`, {})
      .then((r: any) => {
        return r.data;
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  }

  async getPages() {
    return this.client
      .get(`files/${this.fileId}?depth=1&branch_data=true`)
      .then((r: any) => {
        const children = r.data.document.children;
        const pages =  children.reduce((ac: any, a: any) => {
          return { ...ac, [a.id]: a.name };
        }, {});
        return {
          pages: pages,
          branches: r.data.branches
        }
      })
      .catch((e: any) => {
        console.log(e.message);
        router.push("/error");
      });
  }

  async getBranches() {
    return this.client
      .get(`files/${this.fileId}?depth=1&branch_data=true`)
      .then((r) => {
        if (r.data && r.data.branches) {
          return r.data.branches;
        } else {
          return [];
        }
      })
      .catch((e) => {
        router.push("/error");
      });
  }

  async getBase64(url: string) {
    return new Promise(async (resolve, reject) => {
      const img = await axios
        .get(url, { responseType: "blob" })
        .then((response) => {
          return response.data;
        })
        .catch((e) => {
          reject(e);
        });

      try {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onloadend = function () {
          const base64data = reader.result;
          if (base64data) {
            resolve(base64data);
          } else {
            reject();
          }
        };
      } catch (e) {
        reject("unable to save");
      }
    });
  }

  async getNodeAsPng(nodeId: string | string[]) {
    return this.client(`images/${this.fileId}?ids=${nodeId}&format=png`)
      .then((r: any) => {
        return r.data.images;
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  }
}
