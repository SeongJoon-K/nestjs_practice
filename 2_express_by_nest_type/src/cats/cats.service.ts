import { Request, Response } from "express";
import { Cat } from "./cats.model";
import router from "./cats.route";
import HttpException from "./error-type";

//* READ 특정 고양이 데이터 조회

export const readAllcats = (req: Request, res: Response) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* READ 고양이 전체 데이터 조회
// export const createCat = (req, res) => {
//   try {
//     const cats = Cat;
//     res.status(200).send({
//       success: true,
//       data: {
//         cats,
//       },
//     });
//   } catch (error) {
//     res.status(400).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });

//* CREATE 고양이 추가 API
export const createCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data); // 생성
    res.send(200).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* UPDATE 고양이 데이터 업데이트 API
export const patchCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
