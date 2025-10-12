import { webpack } from "replugged";
import { contextMenu } from "replugged/common";
import { ContextMenu } from "replugged/components";

class HomeContext {
  #items: Map<string | symbol, () => React.ReactElement>;
  #navId = "yofukashino-home-context";
  constructor() {
    this.#items = new Map();
    this.open = this.open.bind(this);
  }
  add(id: string | symbol, item: () => React.ReactElement) {
    this.#items.set(id, item);
  }
  remove(id: string | symbol) {
    this.#items.delete(id);
  }
  open(event: React.MouseEvent) {
    const items = this.#items.size
      ? Array.from(
          this.#items
            .values()
            .map((i) => i())
            .filter(Boolean),
        ).sort((a, b) => a?.props?.label?.localeCompare(b?.props?.label))
      : [];

    contextMenu.open(event, (props) => (
      <ContextMenu.ContextMenu {...props} navId={this.#navId} onClose={contextMenu.close}>
        {...items}
      </ContextMenu.ContextMenu>
    ));
  }

  static MODULE_ID = "HomeContext";

  static get(): HomeContext {
    if (webpack.wpRequire.c[this.MODULE_ID]?.loaded === false)
      delete webpack.wpRequire.c[this.MODULE_ID];

    if (webpack.wpRequire.m[this.MODULE_ID]) return webpack.getById(this.MODULE_ID);

    const manager = new HomeContext();

    webpackChunkdiscord_app.push([
      [Symbol.for("HomeContext")],
      {
        [this.MODULE_ID]: (module) => {
          module.exports = manager;
        },
      },
    ]);

    return manager;
  }
}

export default HomeContext.get();
