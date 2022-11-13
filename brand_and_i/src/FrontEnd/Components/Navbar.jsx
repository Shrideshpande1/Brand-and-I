import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ChevronDownIcon,
  Search2Icon
} from "@chakra-ui/icons";
import { resolvePath } from "react-router-dom";
import {
  Button,
  Grid,
  GridItem,
  Image,
  Box,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  ArrowDownIcon,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Logo from "../Images/Logo.jpeg";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Grid
      h="110px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={1}
      color="white"
      backgroundColor="
#1779fd"
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Box boxSize="sm" style={{ marginTop: "30px", width: "250px" }}>
          <NavLink to={"/"}>
            <Image
              style={{ width: "100px", height: "100px", marginLeft: "70px" }}
              src={Logo}
              alt="Dan Abramov"
            />
          </NavLink>
        </Box>
      </GridItem>



      <GridItem style={{ marginTop: "10px" ,marginLeft:"150px"}} colSpan={6}>
        <Wrap>
          <WrapItem>
            <p>Save $3 with App</p>

            <ChevronDownIcon w={6} h={6} />
          </WrapItem>
          <WrapItem>
            <Box style={{ marginRight: "10px" }}>Support Center</Box>
          </WrapItem>
          <WrapItem>
            <Box>
              Ship to
              <Avatar
                style={{
                  width: "20px",
                  height: "20px",
                  marginTop: "3px",
                  radious: "0px",
                }}
                name="USA flag"
                src="data:image/png;base64,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"
              />
              /USD
            </Box>
          </WrapItem>
          <WrapItem>
            <Box style={{ marginLeft: "10px" }}>
              Language
              <ChevronDownIcon w={6} h={6} />
            </Box>
          </WrapItem>
          <WrapItem>
            <Select
              placeholder="Country Website"
              border={"none"}
              style={{ padding: "none", marginLeft: "10px" ,border:"none"}}
            >
              <option style={{ color: "black" }} value="Option 1">
                Global(English)
              </option>
              <option style={{ color: "black" }} value="Option 2">
                FranceOption 2
              </option>
              <option style={{ color: "black" }} value="Option 3">
                Espana
              </option>
              <option style={{ color: "black" }} value="Option 4">
                PoccNr
              </option>
              <option style={{ color: "black" }} value="Option 5">
                Portugal
              </option>
              <option style={{ color: "black" }} value="Option 6">
                Deutschland
              </option>
              <option style={{ color: "black" }} value="Option 7">
                Brasil
              </option>
              <option style={{ color: "black" }} value="Option 8">
                Tuekiye
              </option>
              <option style={{ color: "black" }} value="Option 9">
                Polska
              </option>
              <option style={{ color: "black" }} value="Option 10">
                Japan
              </option>
            </Select>
          </WrapItem>
        </Wrap>
      </GridItem>

      <GridItem colSpan={6}>
        <Wrap>
          <WrapItem>
            <Input
              style={{
                width: "500px",
                borderRadius: "20px",
                marginLeft: "100px",
                borderColor: "#ffda00 ",
                color:"black"
              }}
              placeholder="Search Here"
            />
<Search2Icon w={6} h={6} margin="10px"/>
          </WrapItem>

          <WrapItem>
            <Avatar
              style={{
                width: "20px",
                height: "20px",
                marginTop: "5px",
                radious: "none",
                marginRight: "8px",
                marginLeft: "5px",
              }}
              name="Kola Tioluwani"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEUAAAD///9paWn09PRAQEDf39+srKz4+Pjj4+O1tbXPz89+fn6ysrKNjY3Y2Ng3NzdOTk5wcHDBwcEpKSmkpKRiYmLp6elTU1MRERHHx8cKCgqZmZl2dnYeHh5GRkZZWVkwMDAHWC4LAAADCElEQVRoge3b23aiMBQG4ETOooAoVFTU93/KAc9jc/h3DKGd4e9Fb7r6LSDAzg5h/J44Wc4GThpmD47dfpc5c5I2jF7h+MsN2yefP+H51p3bJbzDc6fsTe7g2O3x9mkusMPre08bdXDp3mVs2cGO7qO3cBaP4rKSJePAy+5nlBRsNg68HQtmEzzBE3zLudo0WRBkTTjz3cG7WePxZ7K0dQOnNX+Lt3cAt9k7e6Hp1QQRXonYPuSDpsF7mcvJlQwJVrhkmQKnKpfzzVBwEalhfhgIFo7n19TrQWDNie6zGAT+9twQhFArwzBwwJyHA8DaK9wnsg9vEZdz/Mqhf3nAYPxeRuENBuNzbRRuMBi/yCgcYDC3Dnt68x+D47HgOebaH1whBgfW4SUG4+8nFM4xOLUOQ29FwtjCYWWhd08zANzqKq4+1QAw8pqgtGNxuNVfZcpEhlBlal/JpMKaUtBrHiK0vjdpCqN8bsaUqpo6aVPIpGqeDLNE5uIPaTNYVl7TJmwmMFuXgmFl0IExaL74yV93dNSc6P/DsN20rhZB7UWRVwflwXBtwbjB1vpF4RNHshX400zwBE/wBP8/cHusuhTmD2syXKT7MniZpkdxs0kNXowUOF/tM0lnIArCw3EQeHuSos9jDyv81EPw7muBTRZ5XVbgYhAAn/dor+lqL6BzroWPguJOlzlwOJo/OYJNl2+HvfoIzsFGoiix5hZTwWDjVJZSOczkcIH21KTxVOdbCqdI60EXxcxGBoN9LV3kfS8JDC19IJEuj4jhky2Xc9k3PUJ4hzaJkUieY0J4YdHlGQ7nNgb0M+Kumwi2NrKuEX8yJoINXguqiNsjIhhazcNTn1GY9PrVxxN2SCZ4gp3CWeTZTA3DvuUIv6P+dbPFCZ7gnwrvGL7uajU+I3wWZDMpk9SAQydh3Ogz0o/jMconWPay6rekjLFDo+5h55t/LjP+ftuR85PdTxguG60cy5eJynVrWfPBwhU5187KbTNd5GxnyurWImSPkqxcFgNv9doe0+Qx8f4DIfwhlUFobvUAAAAASUVORK5CYII="
            />
            <NavLink to={"/Login"}>
              <p style={{ fontSize: "20px" }}>Sign In</p>
            </NavLink>
          </WrapItem>
          {/* Home */}
          <WrapItem display={"flex"}>
            <Avatar
              style={{
                width: "20px",
                height: "20px",
                marginTop: "5px",
                radious: "none",
                marginRight: "8px",
                marginLeft: "5px",
              }}
              name="Kola Tioluwani"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAAwMDD8/PzBwcHZ2dnHx8e0tLRBQUH39/efn59UVFTz8/Ps7OzT09NFRUVbW1s2Njbl5eVMTExubm5paWlhYWEPDw/Nzc2Hh4eZmZmwsLAbGxuTk5N1dXUVFRUmJiaAgIA7Ozunp6ff398q6Ej8AAAE+ElEQVR4nO2da1viMBBGbbmUewUUBFRE/P+/cdfFVbS0nUxmMsPuez7XNOexIWkyM725AQAAAAAAAAAAAAAAAAAAuDoeRndlmdszKO9HfXm92V3mi5WsZG9lLXSB8UxO8GAtU8NdR8ZvUlqb1DKfSgi+ra09mhB4UieuBbMs/r/o9xE9MY8di8/WBq3cxwn2rPtPIG4o3lp3n8AyRvDBuvckuhGG99adJzGOMLTuO5EhW7Bv3XUi/Md0a911Ihu24XUMw5iB6H0985c523Bu3XUiOdswt+46ERjC0D8whKF/YAhD/8AQhv6BIQz9A0MY+geGMPQPDGHoHxhqGL7ebrZF97jdjNvayMeb7bFbbDe3r+y7pTZcH/qLrzY6i6I+6O9+tzgLFln0D49XYDjoVk9kh8WlM578eOHK/ti5YflQ09Rs8OPKeV30ZC/cMZ3hetfQWPHtCaRf6cmwbI4xm3yNx1XLlUufhs+t7e0+rhy1XrnxaPhEaPAUgUQJnRj5M6QInuLkaHFoIYpJDO+ITfayul/bnwQ8qCkM6VGe9HBQ+s9NCsM39j3qmZKjkxMY0gZhKEdHhoJa57y4MSwErc7pejF8FErsqPJzMWtlqDMK3yGORHVDjR/SE1MfhlGR5C3QIum1Dfnxq+3Q1m7ahgrZjp/MXBgu2htiM/RguBYUqkJ63Vc25DdPgbT8VjYsBX2qkNJzlQ1vBX2qkHLnrtrw4MBQc8L38ZTykx0okLaHlQ0fBX2qkFI+tGf8iaBQBdJOhrahYGmDCm+kHmgbar3hv0PLD9Q2pG6VcqBtmmob5vwUzlZo2XNX/I6/oHVA3VDvFZh4eHHFe23E4AX9/dKYhPgmaG/4KQy1lqbUykYJdvV1Jn3adJ/GMKaqQT3k4lQpTtc0RiJ1FKYxfFGY9YmHFokMFc4uyKeHqSIVpHdNiUcWCQ2lX/VDgoYSxdPIrt0cxtNk5DASCmH1qVIZ7kUK4P1hGHbndJF7YoaBBbjSRV8ehARDK/8kjKBtihqlQw3BsDAUOS0Nr4KXNM47fkcjZKq3MFzH/qAOqYFQVoaxO28dTm2qxPkWg6hdG04yQvKMkpg9DV5F5uRZQfw3fmZJ7fR5Tyvm/bjlYA0yu3iK7KLoFrlrHEV+1XeT/MNwxYiKxTYZlqEhGjElmY1ySJdB82JU4X6rLNkyYHXDmujNDbMBVbETmKvmxjDLacvwIX3v15thtqfsok4ZbxNuDLN1r/Umi2hB43z8toO33j7+HsYVB5qPpUSqvlvXVGiKKAredLqItWFD2u+u/Y8pmBvWHmkEHU40YG9YExgWlrDdgAPDbHVhkSr3+RMPhtmysoIT/DiIC8Ms/x5oO+TXarnQtgvDbH++HT4VbdqJ4fny5o1Xh6YON4afp8TSXyDyY/ixghP/9Ikjw+z4u9VCvFVPhtmT2ELmDFeGmcZ3T3wZagBDGPoHhjD0Dwxh6B8YwtA/MIShf2D4Pxv++98hjY2RSAU/5yoqUCkh/JjdJ+uuE+FnssicsuvDrz1CqwdnT0QGRFxAXSpe+YJX8phGFci5hm+Px+Xnih+EKRBZC8D/lBhbz4GTaJWUfXSpMWKZHzPawztb8T0URQpyCIS4arEX+A++M/T6c7OUK/fX9/gelcuWjOl6c8zlS/1Ni8My90H5XGgWoAYAAAAAAAAAAAAAAAAAANDhF5DDcq0XeedAAAAAAElFTkSuQmCC"
            />
            <p style={{ fontSize: "20px" }}>Favorate</p>
          </WrapItem>
          <WrapItem>
            <Avatar
              style={{
                width: "20px",
                height: "20px",
                marginTop: "5px",
                radious: "none",
                marginRight: "8px",
                marginLeft: "5px",
              }}
              name="Kola Tioluwani"
              src="data:image/png;base64,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"
            />
            <NavLink to={"/CartProduct"}>
              <p style={{ fontSize: "20px" }}>Cart</p>
            </NavLink>
          </WrapItem>
        </Wrap>
      </GridItem>
    </Grid>
  );
}
export default Navbar;
