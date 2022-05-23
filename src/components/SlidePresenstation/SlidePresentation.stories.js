import SlidePresentation from "./index";
import {IoBag} from "react-icons/all";

export  default {
  title: "ui/SlidePresentation",
  component: SlidePresentation,
}

const Template = args => <SlidePresentation {...args} />

const sampleData = [
  {
    title: "Professional Hiring",
    icon: <IoBag />,
    image: null,
    content: "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
  },
  {
    title: "Pre3 Hiring",
    icon: <IoBag />,
    image: null,
    content: "Lorem ipsum dolasdasdasd asd asd or sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
  },{
    title: "Bulk Hiring Services",
    icon: <IoBag />,
    image: null,
    content: "Lorem icenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
  },{
    title: "Technical Hiring",
    icon: <IoBag />,
    image: null,
    content: ", consectetur adip Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
  },{
    title: "Campus Hiring",
    icon: <IoBag />,
    image: null,
    content: "Lorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
  },{
    title: "Entrance Exams",
    icon: <IoBag />,
    image: null,
    content: "Lorem ipsum dolor sit amet, consectetur adip Loreng elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Ut consectetur bibendum mi, in ultricies dolor egestas vitae. Aliquam volutpat vel urna et sagittis. Aenean non maximus urna. Integer consectetur, lorem quis bibendum laoreet, diam metus porttitor quam, in imperdiet diam mauris eget ex. Morbi venenatis quis quam eu maximus."
  },
]

export const Default = Template.bind({});
Default.args = {
  data : sampleData
}

