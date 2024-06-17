import React from "react";
import { FaClock, FaUser } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import SideBar from "../components/SideBar";

function SingleBlog() {
  const data = useLoaderData();

  const {
    title,
    category,
    image,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];

  console.log(data);
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
        <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 ">
          <div className="lg:w-3/4 mx-auto">
            <div>
              <img src={image} alt="" className="w-full mx-auto rounded" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-8">
              {title}
            </h2>
            <p className="mb-3 text-gray-600">
              <FaUser className="inline-flex items-center mr-2" />
              {author} | {published_date}
            </p>
            <p className="mb-3 text-gray-600">
              <FaClock className="inline-flex items-center mr-2" />
              {reading_time}
            </p>
            <p className="text-base text-gray-5 mb-6">{content}</p>
            <div className="text-base text-gray-500">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ex aliquam neque, voluptatibus excepturi aliquid itaque iure expedita incidunt voluptatum dicta consequatur deleniti similique quisquam est quos, cumque amet? Eligendi!
              Temporibus id minus ipsam fuga doloremque officia nisi aspernatur quod quidem soluta. Asperiores aperiam adipisci magni quaerat necessitatibus molestias fuga illum ducimus! Quas nostrum aut minima recusandae quidem officia aliquam.
              Commodi necessitatibus eum, iusto error voluptate alias sit accusamus eos optio nam inventore labore totam saepe ducimus nihil nulla odio possimus modi aut ad quidem! Exercitationem aspernatur totam in unde?
              Voluptatibus necessitatibus, deleniti voluptatem a maxime perferendis sapiente neque porro, est eveniet nulla veritatis? Illum aperiam mollitia debitis ipsa repellat molestiae, at non maiores sed omnis exercitationem itaque dolorem possimus.
              Ab, qui nulla! Adipisci dicta ea aspernatur ducimus officia, et similique neque recusandae ratione quaerat labore! Deserunt labore facere nisi ab quos quis a, aut accusamus, doloremque itaque dicta soluta.
              Maiores aut repudiandae necessitatibus id sint similique ducimus quidem amet facere modi, deleniti et quasi? Voluptates dolorum mollitia impedit vitae! Eligendi nihil dolorem modi neque consequuntur obcaecati corporis ipsa fugiat.
              Commodi dolorum reprehenderit expedita ab corporis illum labore est pariatur laborum, magni assumenda quasi praesentium. Officia perspiciatis voluptatibus doloremque sapiente illo adipisci, delectus similique error, reprehenderit ex voluptates accusamus? Quas.
              Labore ad autem, veniam numquam minima ab cumque qui perspiciatis quis. Error aspernatur voluptatem quisquam fugit quas enim sequi iure molestias eos consequatur omnis distinctio, ut quia excepturi. Ipsum, amet.
              Sequi repellat exercitationem illo magnam consequatur ab dicta dolores hic corrupti eveniet quae, est id, nesciunt doloremque? Delectus impedit suscipit aspernatur qui, quod ratione deleniti voluptatibus sunt quae labore eos!
              Aperiam, quod ex. Consectetur nisi natus eum, obcaecati dolor in excepturi, deleniti vel eius itaque blanditiis dolore laudantium incidunt ad quidem quaerat molestiae soluta optio quis reprehenderit harum tempora tempore.
              Cupiditate possimus amet culpa temporibus veniam expedita. Placeat dicta enim veritatis vitae modi veniam at maiores repellendus, debitis corrupti ad iure voluptatem, sint adipisci odit libero, quidem dignissimos minus earum!
              Facere obcaecati fuga saepe nobis nihil dolorum in doloremque tempore eveniet ullam magnam error odio ducimus quaerat labore, voluptatibus possimus, voluptatem, quia nostrum amet modi nemo asperiores. Repellendus, in velit.
              Cum autem quos reprehenderit velit quis totam quae ipsa ad culpa, maiores facere, alias dignissimos dolorum voluptate accusantium porro? Voluptas recusandae necessitatibus sequi enim deserunt nisi commodi iusto voluptates dicta?
              Recusandae non nisi exercitationem sunt in repellendus consequatur voluptatum aut delectus fugit? Est impedit incidunt vero voluptate quia, earum suscipit dignissimos vitae molestiae recusandae asperiores ut perspiciatis quas, non in!
              Reprehenderit veniam magnam expedita laborum adipisci ratione ullam reiciendis natus. Est, animi obcaecati veritatis quod explicabo numquam accusantium nemo assumenda molestiae earum illum excepturi incidunt sunt voluptatum rerum perferendis non.
              Molestiae cum assumenda necessitatibus nemo quam architecto eveniet! Repellendus reiciendis, nihil ipsa minus itaque, earum sint, nesciunt omnis dolore aliquid debitis consequatur a perferendis. Voluptatibus vitae veniam eius fugiat suscipit!
              Expedita, labore placeat dolorem recusandae, aspernatur pariatur laborum nihil quod quidem ab quos amet. Officia inventore quod provident dignissimos perspiciatis eligendi, alias perferendis, sunt reiciendis eos vel optio consequuntur dolorem!
              Nesciunt debitis quisquam, voluptatibus voluptas laborum culpa enim tenetur inventore vitae cupiditate sed eveniet nihil, autem aperiam doloribus cumque, nisi fugiat esse veritatis dolore. Quasi odio fugiat accusamus amet aliquam.
              Ab accusantium, ratione nihil iure quae iste omnis maiores. Id, veniam. Amet odio dicta, explicabo assumenda harum ipsum est cupiditate accusantium dolore culpa sed odit exercitationem vitae maiores, doloribus fugiat.
              Accusamus est, atque sint sunt repudiandae doloribus itaque explicabo, pariatur ut quae distinctio nostrum dolore nesciunt ab eum. Cum hic ab fugit ipsa esse sunt laborum maiores eaque voluptate laudantium!

              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
        <SideBar />
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default SingleBlog;
