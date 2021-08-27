import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CartService {
  //  private productList = [
  //       {
  //           id: 100, description: `Camera: 108 MP Quad Rear camera with Ultra-wide and Macro mode',
  //                                   'Processor: Octa-core Snapdragon 750G with 8nm process and support for next generation 5G Network`, name: 'Mi 10 i 5G', specification: '6GB RAM 128GB Storage', price: 21000
  //       },
  //       {
  //           id: 101, description: `Qualcomm Snapdragon 888 with Adreno 660 GPU',
  //                                    '6.7 Inches 120Hz Fluid AMOLED Display`, name: 'One Plus 9 Pro 5G', specification: '6GB RAM 128GB Storage', price: 25000
  //       },
  //       {
  //           id: 102, description: `16.77 centimeters (6.6-inch) Super AMOLED - infinity U-cut display, HD+ resolution with 720 x 1600 pixels
  //                                    resolution, 265 PPI with 16M colours ,
  //                                   'Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + Hybrid (SIM or MicroSD) Nano Sim`, name: 'Samsung Galaxy M42 5G', specification: '6GB RAM 128GB Storage', price: 29000
  //       },
  //       {
  //           id: 103, description: `Memory, Storage & SIM: 8GB RAM | 128GB storage | Dual SIM (nano+nano)'
  //                                    'Android v10 operating system with upto 2.84 GHz Qualcomm Snapdragon 865 processor`, name: 'MI 10T Pro 5G', specification: '6GB RAM 128GB Storage', price: 31000
  //       },
  //       {
  //           id: 104, description: `5000 mAh lithium polymer battery
  //                                    48MP Quad Camera 48MP Main + 2MP Macro + 2MP Depth Lens 8MP Front Camera` , name: 'Oppo A74 5G', specification: '6GB RAM 128GB Storage', price: 15000
  //       },
  //       {
  //           id: 105, description: `6.55 Inches Fluid AMOLED display with 120 Hz of Refresh rate
  //                                   A Powerful 4500 mAh with 65 Watt Warp charging capability
  //                                   Oxygen OS based on Andriod 11`, name: 'One Plus 9R 5G', specification: '6GB RAM 128GB Storage', price: 17000
  //       },
  //       {
  //           id: 106, description: `55W FlashCharge can charge the 4400mAh battery up to 50% in just 19 minutes* and a full charge in just 50 minutes*
  //                                    64MP AF Main Camera with f/1.79 Aperture supported by GW3 sensor loaded with professional features like 4K videos
  //                                    @ 60FPS, EFB Autofocus Tracking and more. The device also comes with a 16MP Front Camera`, name: 'iQOO Z3 5G', specification: '6GB RAM 128GB Storage', price: 19000
  //       },
  //       {
  //           id: 107, description: `4310 mAH Lithium Polymer Battery with 50W Flash Charging Technology.
  //                                    48MP Quad Camera ( 48MP Main + 8MP wide angle macro + 2MP portrait mono lens + 2MP Macro mono lens)
  //                                    , 16MP Front Camera.`, name: 'OPPO F19 Pro 5G', specification: '6GB RAM 128GB Storage', price: 10000
  //       },
  //       {
  //           id: 108, description: `Display: 6.43-inch, 90Hz Fluid AMOLED display | Resolution: 2400 x 1080 pixels | 410 PPI |
  //                                    Aspect Ratio: 20:9 | Support sRGB, Display P3
  //                                    Memory, Storage & SIM: 8GB RAM | 128GB internal memory on UFS 3.1 storage system.`, name: 'One Plus Nord 2 5G', specification: '6GB RAM 128GB Storage', price: 20000
  //       },
  //       {
  //           id: 109, description: `48MP OIS Main camera with Sony IMX598 sensor
  //                                    16.82cm (6.62) 120Hz AMOLED Display with 1300 peak brightness along with 300Hz Touch Sampling Rate
  //                                    Powerful 66W FlashCharge Technology`, name: 'iQOO 7 Legend 5G', specification: '6GB RAM 128GB Storage', price: 22000
  //       },
  //       {
  //           id: 110, description: `2.86 GHz Qualcomm Snapdragon 865 Octa-core Processor + Adreno 650 GPU , Oxygen OS based on Android 11 Operating system
  //                                    4500 mAH Lithium-ion battery with 65 W “Warp charge”
  //                                    1 year Manufacturer warranty for Device, Battery and in-box Accessories from the date of purchase`, name: 'One Plus 8T 5G', specification: '6GB RAM 128GB Storage', price: 24000
  //       },
  //       {
  //           id: 111, description: `Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode,
  //                                    Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording
  //                                    LiDAR Scanner for improved AR experiences, Night mode portraits
  //                                    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording`, name: 'Apple iphone 12 Pro Max', specification: '6GB RAM 128GB Storage', price: 26000
  //       },
  //       {
  //           id: 112, description: `Qualcomm Snapdragon 888 Processor with Adreno 660 GPU
  //                                    6.55 Inches Fluid AMOLED Display with 120Hz refresh rate
  //                                    OnePlus Oxygen OS based on Andriod 11
  //                                    Comes with 4500 mAh Battery with 65W Wired Charging`, name: 'One Plus 9 5G', specification: '6GB RAM 128GB Storage', price: 26500
  //       },
  //       {
  //           id: 113, description: `8GB RAM | 128GB internal Storage | Dual SIM (nano+nano) dual-standby (5G+5G)
  //                                    Android Pie v10.0 operating system with 2.9GHz Exynos 2100 octa core processor
  //                                    4000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months
  //                                    manufacturer warranty for in-box accessories including batteries from the date of purchase`, name: 'Samsung Galaxy S21', specification: '6GB RAM 128GB Storage', price: 31000
  //       },
  //       {
  //           id: 114, description: `This Renewed product is tested to work and look like new with minimal to no signs of wear & tear;
  //                                    the product comes with relevant accessories and is backed by a minimum six month seller warranty;
  //                                    box may be generic`, name: 'Realme X7 Pro 5G', specification: '6GB RAM 128GB Storage', price: 33000
  //       },
  //       {
  //           id: 115, description: `13MP primary camera and 5MP front facing camera
  //                                    15.80 centimeters (6.22-inch) multi-touch capacitive touchscreen with 1520 x 720 pixels resolution
  //                                    Memory, Storage & SIM: 2GB RAM | 32GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G)`, name: 'Vivo Y9', specification: '6GB RAM 128GB Storage', price: 35000
  //       },
  //       {
  //           id: 116, description: `108MP quad rear camera with OIS, ultra-wide, macro, portrait, night mode, AI scene recognition, HDR, pro mode | 20MP front camera
  //                                    16.94 centimeters (6.67-inch) FHD+ AMOLED capacitive multi-touch touchscreen with 2340 x 1080 pixels resolution, 386 ppi pixel density and 19.5:9 aspect ratio
  //                                    | 3D Curved glass  Memory, Storage & SIM: 8GB RAM | 128GB internal memory | Dual SIM (nano+nano) with support for 5G`,
  //           name: 'Mi 10 Twilight', specification: '6GB RAM 128GB Storage', price: 39000
  //       },
  //       {
  //           id: 117, description: `Colour : Black  Rom : 1 GB Product Dimensions : 1.5 x 6.6 x 11.4 cm`,

  //           name: 'BlackBerry Bold 9000', specification: '6GB RAM 128GB Storage', price: 40000
  //       },
  //       {
  //           id: 118, description: `Camera: 48 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera
  //                                    Battery: 5000 mAh large battery with 33W fast charger in-box and Type-C connectivity
  //                                    Processor: Qualcomm Snapdragon 678 with Kryo 460 Octa-core; 11nm process; Up to 2.2GHz clock speed`, name: 'Redmi Note 10', specification: '6GB RAM 128GB Storage', price: 41000
  //       },
  //       {
  //           id: 119, description: `48MP + 5MP + 2MP + 2MP | 16MP Front Camera
  //                                    5000 mAh Li-Polymer Battery
  //                                    MediaTek Helio G85 (MT6769V/CZ) Processor`, name: 'Micromax in Note 1', specification: '6GB RAM 128GB Storage', price: 17600
  //       }
  //   ];
    // cartProductList = [];
    totalPrice=0;
    searchText:string | number="mobile";
    @Output() searchValueChanged= new EventEmitter<string|number>();
    // addProductToCart(product) {
    //     const productExistInCart = this.cartProductList.find(({name}) => name === product.name);
    //     if (!productExistInCart) {
    //       this.cartProductList.push({...product, num:1});
    //       return;
    //     }
    //     productExistInCart.num += 1;


    //   }
      // removeProduct(product) {
      //   this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)

      //  }
      //  getProductList()
      //  {
      //   return this.productList;
      //  }



}
