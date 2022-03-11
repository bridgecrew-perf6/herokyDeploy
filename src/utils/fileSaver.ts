import { saveAs } from "file-saver";

  const saveFile = (link: string, name: string) => {
    saveAs(
      link,
      name
    );
  };

  export default saveFile