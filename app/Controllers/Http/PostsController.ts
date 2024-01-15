import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";

export default class PostsController {
  async index({}: HttpContextContract) {
    let posts = await Post.all();
    return posts;
  }

  async store({ request }: HttpContextContract) {
    let data = request.all();
    let newPost = await Post.create(data);
    return newPost;
  }
}
