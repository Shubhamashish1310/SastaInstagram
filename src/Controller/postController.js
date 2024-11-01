import { createPostService } from "../Services/postService.js";

export async function postscontroller(req, res) {
    console.log('req.file:', req.file); // should now include `cloudinaryUrl`
    console.log('req.body:', req.body);


    const post = await createPostService({
        image: req.file.cloudinaryUrl,
        caption: req.body.caption,
    });
    // Respond with the Cloudinary URL
   res.status(201).json({ 
    success: true,
    message: 'Image uploaded successfully',
    data: post
    });

}
