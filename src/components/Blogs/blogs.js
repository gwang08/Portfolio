import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  const blogPosts = [
    {
      title: "Tìm hiểu về React",
      description: "Khám phá cách React thay đổi cách chúng ta phát triển giao diện người dùng với các component và state.",
      image: "https://asia-1-fileserver-2.stringee.com/0/asia-1_1_H3EDEI7YOEEPCZB/1702528784-Tim_hieu_ve_ReactJS.png",
      link: "https://stringee.com/vi/blog/post/Bai-1-Tim-hieu-ve-React-JS",
    },
    {
      title: "JavaScript ES6: Những tính năng mới",
      description: "Tìm hiểu về các tính năng mới của JavaScript ES6 và cách chúng cải thiện trải nghiệm lập trình.",
      image: "https://aptechsaigon.edu.vn/gw-content/images/1700883312-SSxslLI.jpg",
      link: "https://bizflycloud.vn/tin-tuc/es6-la-gi-20241007144629208.htm",
    },
    {
      title: "CSS Grid: Hướng dẫn cơ bản",
      description: "Khám phá CSS Grid, một trong những công cụ mạnh mẽ nhất để thiết kế layout responsive.",
      image: "https://statics.cdn.200lab.io/2024/07/05-CS-CO-BAN.jpg",
      link: "https://200lab.io/blog/flexbox-vs-grid/",
    },
    {
      title: "React Router: Quản lý điều hướng",
      description: "Học cách sử dụng React Router để điều hướng giữa các trang trong ứng dụng React.",
      image: "https://th.bing.com/th/id/OIP.g9eM0T43SBm2wRUsL6y9twHaD3?rs=1&pid=ImgDetMain",
      link: "https://xaydungso.vn/blog/huong-dan-cai-dat-outlet-react-router-dom-la-gi-cho-ung-dung-react-cua-ban-vi-cb.html",
    },
    {
      title: "Lập trình hướng đối tượng trong JavaScript",
      description: "Tìm hiểu về lập trình hướng đối tượng và cách triển khai trong JavaScript.",
      image: "https://th.bing.com/th/id/OIP.LmUpOdJ_BQpsZCjVjisiHgHaD4?rs=1&pid=ImgDetMain",
      link: "https://nhasachtinhoc.blogspot.com/2020/09/lap-trinh-huong-oi-tuong-trong-javascript-9050.html",
    },
    {
      title: "Xây dựng ứng dụng với Node.js",
      description: "Khám phá Node.js và cách xây dựng ứng dụng web nhanh chóng với nó.",
      image: "https://th.bing.com/th/id/OIP.Mb3MlJJtKDOqjTwwFpuLDQHaEK?rs=1&pid=ImgDetMain",
      link: "https://soyncanvas.vn/30-xay-dung-ung-dung-to-do-node-js-co-ban-phan-01-rhp-team-noi-dung-ve-chu-de-nodejs-co-ban/",
    },
  ];

  return (
    <section>
      <Container fluid className="home-section" id="blogs">
        <Container className="home-content">
          <h1 className="heading" style={{ textAlign: "center", padding: "50px 0" }}>
            BLOGS
          </h1>
          <Row>
            {blogPosts.map((post, index) => (
              <Col md={4} key={index} className="blog-card">
                <div className="blog-card-content" style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", margin: "10px", height: "400px" }}>
                  <img src={post.image} alt="blog pic" className="img-fluid" style={{ maxHeight: "200px", borderRadius: "10px" }} />
                  <h3 style={{ marginTop: "20px" }}>{post.title}</h3>
                  <p className="blog-description">{post.description}</p>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      console.log(`Navigating to: ${post.link}`); 
                      window.open(post.link, "_blank"); 
                    }} 
                  >
                    Đọc thêm
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Blog;
