import {blogs} from "@/app/blog/blogs";
import Link from "next/link";

export default function Blog() {
    return (
        <section id="blog" className="container mx-auto px-4 grid lg:grid-cols-3 gap-4 lg:gap-12 py-12">
            {blogs.map((blog) => (
                <article className="shadow-lg rounded-xl transition-shadow duration-300 overflow-auto hover:shadow-2xl" key={blog.id}>
                    <Link href={`/blog/${blog.slug}`}>
                        <img src={blog.image}  alt={blog.title}/>

                        <div className="blog-details p-4">
                            <h2 className="text-lg lg:text-xl text-center">{blog.title}</h2>
                        </div>
                    </Link>

                </article>
            ))}
        </section>
    )
}