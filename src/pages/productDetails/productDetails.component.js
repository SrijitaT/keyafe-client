import React from 'react'
import "./productDetails.styles.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {FaStar,FaStarHalfAlt} from "react-icons/fa";


const ProductDetails = () => {
  return (
        <Grid container xs={12} md={12} lg={12}>
            <Grid item xs={6} md={6} lg={6} className="prod-image">
                <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
                <div className="prod-name">
                    <h2>Black Forest Cake</h2>
                <div class="prod-ratings">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalfAlt/>
                <span>20 ratings</span>
                <span>5 reviews</span></div>
                </div>

                <div class="price-tag">
                    <p>Rs 595</p>
                </div>

                <Grid container spacing={2} className="prod-variant">
                <Grid item xs={12} md={12} lg={12}>
                    <p>Select variant</p>
                </Grid>
                    <Grid container spacing={2} className="variant-desc">
                        <Grid item xs={4} md={4} lg={4} className="active variant-grid">
                            <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                            <div>
                                <h3>1 pound</h3>
                                <h3>Rs 595</h3>
                            </div>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4} className="variant-grid">
                            <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                            <div>
                                <h3>2 pounds</h3>
                                <h3>Rs 995</h3>
                            </div>
                        </Grid>
                        <Grid item xs={4} md={4} lg={4} className="variant-grid">
                            <img src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                            <div>
                                <h3>3 pounds</h3>
                                <h3>Rs 1800</h3>
                            </div>
                        </Grid>   
                    </Grid>                 
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} className="delivery-location">
                            <input type="text" placeholder="Pincode"></input>
                            <Button variant="outlined" color="primary">Check</Button>
                    </Grid>
                    <hr/>
                    <Grid item xs={12} md={12} lg={12} className="prod-desc">
                        <div className="description-title"><h3>Description</h3></div>
                        <div className="description-text">
                        This classic round Black Forest cake makes a highly tempting gift.
                         It weighs half kg, and is stuffed with whipped cream and studded with cherries. 
                         Its eggless version is also available. You can give this gift on any joyous occasion. 
                         Key attributes :
                        </div>
                    </Grid>
                        
                    <Grid container spacing={2} className="prod-attributes">
                        <Grid item xs={6} md={6} lg={6}>Weight : 0.5 kg</Grid>
                        <Grid item xs={6} md={6} lg={6}>Flavours : Black Forest</Grid>
                        <Grid item xs={6} md={6} lg={6}>Shape : Round</Grid>
                    </Grid>
                    <Grid container spacing={2}>
                    <Grid item xs={6} md={6} lg={6}>
                        <h3 className='color-purple'>Message on cake</h3>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className="border-none">
                        <input type="text" placeholder="Message on cake"></input>
                    </Grid>
                    </Grid>
                    
            </Grid>
        </Grid>
  )
}

export default ProductDetails;