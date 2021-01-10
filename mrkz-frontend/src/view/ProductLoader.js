import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Product from "./Product";

export class ProductLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      filter: "ALL",
      products: [],
      category: "",
      checkedItems: new Map(),
    };
    this.fetchBrandsForCategory = this.fetchBrandsForCategory.bind(this);
    this.getBrandsByCategory = this.getBrandsByCategory.bind(this);
    this.handleBrandCheckboxChange = this.handleBrandCheckboxChange.bind(this);
    this.refreshProductsForBrand = this.refreshProductsForBrand.bind(this);
    this.useChosenBrandsForRefresh = this.useChosenBrandsForRefresh.bind(this);
  }

  fetchBrandsForCategory = (event) => {
    var cleanedCheckedItems = new Map();
    this.setState((prevState) => ({
      category: event,
      checkedItems: cleanedCheckedItems,
      brands: [],
    }));
    this.getBrandsByCategory(event);
  };

  getBrandsByCategory(category) {
    fetch("http://localhost:8080/brands/" + category)
      .then((response) => response.json())
      .then(
        (result) => {
          this.refreshProductsForBrand(result);
          this.setState({
            brands: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getAllProducts() {
    fetch("http://localhost:8080/allProducts")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            products: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  refreshProductsForBrand(brands) {
    fetch("http://localhost:8080/products/brands/" + brands)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            products: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleBrandCheckboxChange(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;
    this.setState(
      (prevState) => ({
        checkedItems: prevState.checkedItems.set(item, isChecked),
      }),
      this.useChosenBrandsForRefresh
    );
  }

  useChosenBrandsForRefresh() {
    var chosenBrands = [];
    this.state.checkedItems.forEach((value, key) => {
      if (value === true) {
        chosenBrands.push(key);
      }
    });
    if (chosenBrands.length > 0) {
      this.refreshProductsForBrand(chosenBrands);
    } else {
      this.getAllProducts();
    }
  }

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    return (
      <div className="App">
        {/*Top: Category Filter*/}
        <div className="products__categoriesFilter">
          <h3>Choose Category</h3>
          <DropdownButton
            alignRight
            title="Choose Category"
            id="dropdown-menu-align-right"
            onSelect={this.fetchBrandsForCategory}
          >
            <Dropdown.Item eventKey="shirts">shirts</Dropdown.Item>
            <Dropdown.Item eventKey="pants">pants</Dropdown.Item>
            <Dropdown.Item eventKey="food">food</Dropdown.Item>
          </DropdownButton>
          <h3>{this.state.category}</h3>
        </div>
        {/*Left: Price Filter*/}
        <div className="products__loader">
          <form className="products__PriceRangeForm">
            <h3>By Price</h3>
            <input placeholder="Min" name="minPrice" />
            <span> - </span>
            <input placeholder="Max" name="maxPrice" />
            <button className="products_PriceRangeFormButton" type="submit">
              Go
            </button>
          </form>
          {/*Left: Brand Filter*/}
          <div className="products__Brand">
            <h3>By Brand</h3>
            {this.state.brands.map((brand, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={brand}
                  onChange={this.handleBrandCheckboxChange}
                />
                {brand}
              </label>
            ))}
          </div>
          {/*Left: Rating Filter*/}
          <div className="products__Rating">
            <h3>By Rating</h3>
          </div>
        </div>

        {/*Right: Products*/}
        <div className="products__All">
          {this.state.products?.map((product, index) => (
            <Product
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductLoader;
