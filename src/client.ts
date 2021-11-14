import axios, { AxiosInstance } from "axios";
import { store } from "./store";
import router from "./routes";
export class Client {
  client: AxiosInstance
  fileId = "";

  constructor() {
    this.client = axios.create({
      baseURL: `https://api.figma.com/v1/`,
      headers: { "X-Figma-Token": store.state.token },
    });
    this.fileId = store.state.fileId;
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
      .get(`files/${this.fileId}?depth=1`)
      .then((r: any) => {
        const pages = r.data.document.children;
        return pages.reduce((ac: any, a: any) => {
          return { ...ac, [a.id]: a.name };
        }, {});
      })
      .catch((e: any) => {
        console.log(e.message);
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
        reject('unable to save')
      }
    });
  }

  async getNodeAsPng(nodeId: string | string[]) {
    return this.client(`images/${this.fileId}?ids=${nodeId}&format=png`)
      .then((r: any) => {
        return r.data.images;
      })
      .catch((e: any) => {
        console.log(e.message)
      });
  }
}
