import { createClient } from "@supabase/supabase-js";

// Import the server-side Supabase client that already has the environment variables configured
import { createClient } from "../../supabase/server";

async function getSupabaseClient() {
  return await createClient();
}

type ProductData = {
  name: string;
  slug: string;
  code: string;
  price: string | number;
  surface: string;
  thickness: string;
  dimensions: string;
  finish: string;
  color: string;
  catalog_url: string;
  description: string;
  images: string[];
};

async function importProducts() {
  const supabase = await getSupabaseClient();
  const products: ProductData[] = [
    {
      name: "Corchia",
      slug: "corchia",
      code: "ST65",
      price: 0,
      surface: "Đá hoa",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Màu Be",
      catalog_url:
        "https://drive.google.com/uc?id=1QonkfbgSmO_I78ziRXBq_HkkspkUDRHP",
      description:
        "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
      images: [
        "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F1-Polished-1200x2400x9mm.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST65.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/65_ST65_.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F1-Polished-1200x2400x9mm.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F2-Polished-1200x2400x9mm.png",
      ],
    },
    {
      name: "Venato",
      slug: "venato",
      code: "ST64",
      price: 0,
      surface: "Đá hoa",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Bóng kính",
      catalog_url:
        "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      description:
        "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
      images: [
        "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122-F1-Polished-1200x2400x9mm.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST64.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/64_ST64_Venato.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122-F1-Polished-1200x2400x9mm.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122F2-Polished-1200x2400x9mm.png",
      ],
    },
    {
      name: "Wavy",
      slug: "wavy",
      code: "ST66",
      price: 0,
      surface: "Đá hoa",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Màu Be",
      catalog_url:
        "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      description:
        "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
      images: [
        "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F1-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST66.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST66_Wavy.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F1-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      ],
    },
    {
      name: "Honey Onyx",
      slug: "honey-onyx",
      code: "ST61",
      price: 0,
      surface: "Đá hoa",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Màu Be",
      catalog_url:
        "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      description:
        "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.\nNhững đường vân tròn mềm mại của Honey Onyx đem lại sự thư thái, nhẹ nhàng nhưng vẫn không kém phần tinh tế, sang trọng cho không gian.",
      images: [
        "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2024/02/sm61.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/61_ST61_Honey-Onyx-1.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F2-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      ],
    },
    {
      name: "Arabescato Antique",
      slug: "arabescato-antique",
      code: "ST62",
      price: 0,
      surface: "Đá hoa",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Trắng",
      catalog_url:
        "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      description:
        "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.\nNhững đường vân cá tính, mạnh mẽ của Arabescato Antique mang đến sự ấn tượng nhưng vẫn không kém phần tinh tế, sang trọng cho không gian.",
      images: [
        "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2024/02/62_ST62_Arabescato-Antique.png",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      ],
    },
    {
      name: "Alpinus",
      slug: "alpinus",
      code: "SP25",
      price: 1800000,
      surface: "Đá hoa",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Màu Be",
      catalog_url:
        "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      description:
        "Alpinus độc đáo với hoa văn giống như pha lê. Với sự bùng nổ của màu trắng, xám và be vàng, vật liệu này sẽ tạo thêm cảm giác sang trọng nhưng sắc sảo cho không gian của bạn.",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122-Random-face-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/09/sp25.png",
        "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122_ve_sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122-Random-face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      ],
    },
    {
      name: "Kanjini",
      slug: "kanjini",
      code: "SP07",
      price: 1800000,
      surface: "Đá",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Xám trắng",
      catalog_url: "",
      description:
        "Tone màu xám với hoàn thiện bóng giúp tăng diện tích không gian của bạn nhưng vẫn giữ được sự mộc mạc tối giản",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Kanjini-SP07D122-v2_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/180223_Kanjini.png",
        "https://slabstone.vn/wp-content/uploads/2023/02/SP07D122_Op-Lat__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Kanjini-SP07D122-v3_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      ],
    },
    {
      name: "Panda White",
      slug: "panda-white",
      code: "SP09",
      price: 1800000,
      surface: "Đá hoa",
      thickness: "9mm, 15mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Trắng, Đen",
      catalog_url: "",
      description: "",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Panda-White-SP09D12-v2_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/180223_Panda-1.png",
      ],
    },
    {
      name: "Nebula",
      slug: "nebula",
      code: "SP11",
      price: 1800000,
      surface: "Đá hoa",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Xám",
      catalog_url: "",
      description:
        "Cảm hứng từ những tinh vân vũ trụ đã được bao trọn trong thiết kế độc đáo của NEBULA. Phải mất nhiều năm để hình thành nên những tinh vân tuyệt đẹp trong thiên hà, nhưng chỉ mất vài giờ đồng hồ để tái hiện lại vẻ đẹp đó với SLABSTONE.\nNEBULA phù hợp cho mọi ứng dụng và thiết kế, nâng tầm đẳng cấp cho không gian sống của bạn!",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Nebula-SP11D122-v1_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/180223_nebula.png",
      ],
    },
    {
      name: "Ofanto",
      slug: "ofanto",
      code: "SP12",
      price: 1800000,
      surface: "Đá",
      thickness: "9mm, 15mm",
      dimensions: "1200x2400",
      finish: "Bóng kính",
      color: "Xám trắng",
      catalog_url: "",
      description:
        "Mạnh mẽ và táo bạo, thiết kế Ofanto phù hợp làm điểm nhấn cho khu vực bếp, mặt bàn và cả ốp lát trang trí",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Ofanto-SP12D122-v2_Polished_120x240cm_916mm-1-scaled.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/180223_ofanto.png",
      ],
    },
    {
      name: "Blue Explosion",
      slug: "blue-explosion",
      code: "SP13 | SM13",
      price: 1800000,
      surface: "Đá hoa",
      thickness: "9mm, 15mm",
      dimensions: "1200x2400",
      finish: "Bóng kính, Matt",
      color: "Xanh Dương",
      catalog_url: "",
      description:
        "Lấy cảm hứng từ một loại đá quý cẩm thạch màu xanh có một bề mặt độc ​​đáo, Blue explosion được các kiến ​​trúc sư và nhà thiết kế nội thất đánh giá cao, đặc biệt là trong các môi trường tinh tế.",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Blue-Explosion-SP13D122-v3_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/SP13D122_op-lat__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Blue-Explosion-SP13D122-v3_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      ],
    },
    {
      name: "Sand",
      slug: "sand",
      code: "SP51",
      price: 1100000,
      surface: "BODYTECH",
      thickness: "9mm, 12mm, 15mm",
      dimensions: "800x1600, 1200x2400",
      finish: "Bóng kính, Bóng mờ, Matt",
      color: "Màu Be",
      catalog_url: "",
      description:
        "Sản phẩm Sand là sự kết hợp của các tông màu tự nhiên truyền tải chiều sâu và chi tiết thiết kế thú vị. Phản ánh sự hòa quyện mềm mại của cồn cát với tiếng thì thầm của pha lê. Tông màu ấm áp tự nhiên của sản phẩm này tôn lên mọi khu vực xung quanh cả trong nhà lẫn ngoài trời.",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Fullbody-SP51D122-Muoi-tieu_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/03/180323_sand.png",
        "https://slabstone.vn/wp-content/uploads/2023/02/TP51D122-Lat-San__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Fullbody-SP51D122-Muoi-tieu_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      ],
    },
    {
      name: "Cosima Bei",
      slug: "cosima-bei",
      code: "SM05",
      price: 1800000,
      surface: "Màu Đặc",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Matt",
      color: "Màu Be",
      catalog_url: "",
      description:
        "Mẫu Beige nhẹ nhàng này tạo nên một cảm giác ấm cúng cho phong cách thiết kế tối giản",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/02/05_SM05D122.png",
        "https://slabstone.vn/wp-content/uploads/2023/02/180223_Cosima-beige.png",
        "https://slabstone.vn/wp-content/uploads/2023/02/SM05D122-op-lat-scaled.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/SM05D122_ban-dai-scaled.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/05_SM05D122.png",
      ],
    },
    {
      name: "Cosima Grey",
      slug: "cosima-grey",
      code: "SM04",
      price: 1800000,
      surface: "Màu Đặc",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Matt",
      color: "Xám",
      catalog_url: "",
      description:
        "Với tone màu xám nhạt, không gian của bạn trở nên hiện đại và phong cách hơn. Phù hợp với khu vực bếp hay các dự án lớn",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Cosima-Grey-SM04D122_Matt_120x240cm_9mm-2-scaled.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/180223_Cosima-grey.png",
        "https://slabstone.vn/wp-content/uploads/2023/02/SM04D122-OP-NGOAI-TROI-1-scaled.jpg",
        "https://slabstone.vn/wp-content/uploads/2024/01/SM04D122_op-lat-scaled.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Cosima-Grey-SM04D122_Matt_120x240cm_9mm-2-scaled.jpg",
      ],
    },
    {
      name: "Glenveal",
      slug: "glenveal",
      code: "SM06",
      price: 1800000,
      surface: "Đá",
      thickness: "9mm",
      dimensions: "1200x2400",
      finish: "Matt",
      color: "Xám",
      catalog_url: "",
      description:
        "Bề mặt Matt tạo nên cảm giác chân thực và có độ sâu với thiết kế đá của Glenveal. Phù hợp với không gian hiện đại và tối giản",
      images: [
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v1_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/180223_Glenveal.png",
        "https://slabstone.vn/wp-content/uploads/2023/02/SM06D122_2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/SM06D122-op-lat-ve-sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
        "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v1_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      ],
    },
  ];

  console.log(`Starting import of ${products.length} products...`);

  for (const product of products) {
    try {
      // Convert price string to number if needed
      let priceValue = product.price;
      if (typeof priceValue === "string" && priceValue) {
        // Remove commas and other non-numeric characters except decimal point
        priceValue = parseFloat(priceValue.replace(/[^0-9.]/g, ""));
      }

      // Insert product into database
      const { data: insertedProduct, error: productError } = await supabase
        .from("products")
        .insert({
          name: product.name,
          slug: product.slug,
          code: product.code,
          price: priceValue || 0, // Default to 0 if price is empty or invalid
          surface: product.surface,
          thickness: product.thickness,
          dimensions: product.dimensions,
          finish: product.finish,
          color: product.color,
          catalog_url: product.catalog_url,
          description: product.description,
        })
        .select()
        .single();

      if (productError) {
        console.error(`Error inserting product ${product.name}:`, productError);
        continue;
      }

      console.log(
        `Inserted product: ${product.name} with ID: ${insertedProduct.id}`,
      );

      // Upload images if any
      if (product.images && product.images.length > 0) {
        for (let i = 0; i < product.images.length; i++) {
          const imageUrl = product.images[i];
          if (!imageUrl) continue;

          // Insert image record
          const { error: imageError } = await supabase
            .from("product_images")
            .insert({
              product_id: insertedProduct.id,
              url: imageUrl,
              alt_text: product.name,
              is_primary: i === 0, // First image is primary
              display_order: i,
            });

          if (imageError) {
            console.error(
              `Error inserting image for product ${product.name}:`,
              imageError,
            );
          } else {
            console.log(`Inserted image ${i + 1} for product ${product.name}`);
          }
        }
      }
    } catch (error) {
      console.error(`Error processing product ${product.name}:`, error);
    }
  }

  console.log("Import completed!");
}

importProducts()
  .then(() => {
    console.log("Script execution completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Script execution failed:", error);
    process.exit(1);
  });
