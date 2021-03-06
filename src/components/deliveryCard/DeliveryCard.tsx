import React, { useState } from "react";
import * as SC from "./deliveryCard.style";

import data from "../../utils/mocks/delivery.json";
interface DeliveryProps {
  schedule: any;
  onSelect: (data: any) => void;
}

function DeliveryCard({ schedule, onSelect }: DeliveryProps) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = ({ id }: any) => {
    if (id === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(id);
    }
  };

  {
    console.log(schedule);
  }
  return (
    <SC.Container>
      {schedule?.map((item: any) => (
        <SC.Card
          key={item?.id}
          style={{
            borderColor: selectedItem === item?.id ? "#144c8b" : "#d8d8d8",
          }}
          onClick={() => {
            handleSelect(item);
            onSelect(item?.id);
          }}
        >
          <SC.WeekDay>{item?.weekday_name}</SC.WeekDay>
          <SC.Date>{item?.date}</SC.Date>
          <SC.Time>{`${item?.hour_min} - ${item?.hour_max}`}</SC.Time>
        </SC.Card>
      ))}
    </SC.Container>
  );
}

export default DeliveryCard;
