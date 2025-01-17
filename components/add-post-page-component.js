import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

let imageUrl = "";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    const appHtml = `
      <div class="page-container">
      <div class="header-container"></div>
      <div class="add-post-form-wrap">
        <div class="form">
          <h3 class="form-title">Добавить пост</h3>
          <div class="form-inputs">
            <div class="add-image-post"></div>
            <textarea
              class="textarea add-post-textarea"
              rows="4"
              placeholder="Опишите фотографию..."
            ></textarea>
            <div class="form-error --display-off">
              Добавьте фотографию и описание к ней
            </div>
            <button class="button" id="add-button">Добавить</button>
          </div>
        </div>
      </div>
    </div>
    `;

    appEl.innerHTML = appHtml;

    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });
  };

  render();
  renderUploadImageComponent({
    element: appEl.querySelector(".add-image-post"),
    onImageUrlChange(newImageUrl) {
      imageUrl = newImageUrl;
    },
  });

  document.getElementById("add-button").addEventListener("click", () => {
    onAddPostClick({
      description: appEl
        .querySelector(".add-post-textarea")
        .value.replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;"),
      imageUrl: imageUrl,
    });
  });
}