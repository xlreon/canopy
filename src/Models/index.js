import { Model, ORM } from "redux-orm";
import { AppActions } from "../Actions";

class HoldingTable extends Model {
  static reducer(action, HoldingTable, session) {
    const { payload, type } = action;
    switch (type) {
      case AppActions.HOLDING_TABLE_CREATE: {
        payload.map((detail) => HoldingTable.create(detail));
        break;
      }
    }
  }
}
HoldingTable.modelName = "HoldingTable";

const orm = new ORM();
orm.register(HoldingTable);

export { HoldingTable, orm };
