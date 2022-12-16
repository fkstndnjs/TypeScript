import { NextFunction, Request, Response } from "express";
import * as tweetRepository from "./tweet.repository";

export const getAllTweets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tweets = await tweetRepository.getAllTweets();

  res.status(200).json(tweets);
};

export const createTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { text } = req.body;

  const userId = req.get("userId");
};
