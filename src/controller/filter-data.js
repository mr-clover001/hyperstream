export const filterMatchText = (data, text) => {
  const tempData = data.filter((value) => {
    return (
      value.hasOwnProperty("title") && value.title.toLowerCase().includes(text)
    );
  });

  console.log("check vvalue");
  console.log(tempData);
  return tempData;
};
