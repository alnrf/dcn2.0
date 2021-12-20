import React, { useState } from "react";
import * as SC from "./payment.style";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import visa from "../../assets/logos/visa-logo.png";
import master from "../../assets/logos/mastercard-logo.png";
import alelo from "../../assets/logos/alelo-logo.png";

function Payment() {
  const [isCredit, setIsCredit] = useState(true);
  const [payment, setPayment] = useState<string>();
  return (
    <SC.Container>
      <SC.Title>
        <span>Selecione sua forma de pagamento</span>
      </SC.Title>
      <>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Cartão</Tab>
            <Tab>Dinheiro</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <>
                <SC.Row>
                  <SC.Button
                    isCredit={isCredit}
                    onClick={() => setIsCredit(!isCredit)}
                  >
                    <span>Crédito</span>
                  </SC.Button>
                  <SC.Button
                    isCredit={!isCredit}
                    onClick={() => setIsCredit(!isCredit)}
                  >
                    <span>Débito</span>
                  </SC.Button>
                </SC.Row>
                {isCredit ? (
                  <SC.Row>
                    <SC.Card
                      onClick={() => setPayment("ALELO")}
                      style={{
                        borderColor:
                          payment === "ALELO" ? "#144c8b" : "#d8d8d8",
                      }}
                    >
                      <SC.Image>
                        <img src={alelo} alt="Cartão Alelo" />
                      </SC.Image>
                      <SC.Text>Alelo</SC.Text>
                    </SC.Card>
                    <SC.Card
                      style={{
                        marginRight: "15px",
                        marginLeft: "15px",
                        borderColor: payment === "VISA" ? "#144c8b" : "#d8d8d8",
                      }}
                      onClick={() => setPayment("VISA")}
                    >
                      <SC.Image>
                        <img src={visa} alt="Cartão Visa" />
                      </SC.Image>
                      <SC.Text>Visa</SC.Text>
                    </SC.Card>
                  </SC.Row>
                ) : (
                  <SC.Row>
                    <SC.Card
                      onClick={() => setPayment("ALELO")}
                      style={{
                        borderColor:
                          payment === "ALELO" ? "#144c8b" : "#d8d8d8",
                      }}
                    >
                      <SC.Image>
                        <img src={alelo} alt="Cartão Alelo" />
                      </SC.Image>
                      <SC.Text>Alelo</SC.Text>
                    </SC.Card>
                    <SC.Card
                      style={{
                        marginRight: "15px",
                        marginLeft: "15px",
                        borderColor:
                          payment === "MASTERCARD" ? "#144c8b" : "#d8d8d8",
                      }}
                      onClick={() => setPayment("MASTERCARD")}
                    >
                      <SC.Image>
                        <img src={master} alt="Cartão MasterCard" />
                      </SC.Image>
                      <SC.Text>MasterCard</SC.Text>
                    </SC.Card>
                    <SC.Card
                      onClick={() => setPayment("VISA")}
                      style={{
                        borderColor: payment === "VISA" ? "#144c8b" : "#d8d8d8",
                      }}
                    >
                      <SC.Image>
                        <img src={visa} alt="Cartão Visa" />
                      </SC.Image>
                      <SC.Text>Visa</SC.Text>
                    </SC.Card>
                  </SC.Row>
                )}
              </>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    </SC.Container>
  );
}

export default Payment;
