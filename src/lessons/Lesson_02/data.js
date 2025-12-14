// экспорт переменных по отдельности
// export const animal = {
//     type: "Tiger",
//     fullName: "marti",
//     age:10,
//     color: "Orange Stripped",
//     isPlanteater:false,
//     avatarURL:
//     "https://nnzoo.ru/wp-content/cache/thumb/21/343dcac4518cf21_640x580.jpg"

// };

const animal = {
     type: "Tiger",
     fullName: "marti",
     age:10,
     color: "Orange Stripped",
     isPlanteater:false,
     avatarURL:
     "https://nnzoo.ru/wp-content/cache/thumb/21/343dcac4518cf21_640x580.jpg"

 };

  const getPlanteaterStatus = (isPlanteater) => {
   if (isPlanteater){
    return "Yes";
}else{
  return "No";
}
  };

  //второй сопособ, экспорт всех переменных по отдельности
  //в фигурных скобках

  export {animal, getPlanteaterStatus};
