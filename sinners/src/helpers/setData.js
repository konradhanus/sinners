import { getDatabase, set, ref } from "firebase/database";
// @ts-ignore
import uuid from "react-uuid";
import { app as firebaseApp } from "../firebase";

const database = getDatabase(firebaseApp);

function setData(points, name) {
  const uuidKey = uuid();

  set(ref(database, "public/" + "players/" + "/" + uuidKey), {
    player: {
      name,
      points,
    },
  })
    .then(() => {
    //   alert("Twoje dane zostały zapisane");
    })
    .catch((error) => {
    //   alert(error + "Nie zapisało się");
    });
}

export default setData;
