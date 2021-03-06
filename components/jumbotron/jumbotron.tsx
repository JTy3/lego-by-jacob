import { PropsWithoutRef } from "react";

type JumbotronProps = {
  title: string;
  badge: any;
  content: string;
  linkLabel: string;
  linkUrl: string;
  bgColor: string;
  txtColor: string;
};

export default function Jumbotron( props: JumbotronProps ) {
  return (
    <div className={`h-100 p-5 rounded-3 border text-${props.txtColor} ${props.bgColor}`}>
      <h2>{props.title} <span className="badge bg-primary">{props.badge}</span></h2>
      <p>{props.content}</p>
      <a href={props.linkUrl} className={`btn btn-outline-${props.txtColor}`} type="button">
        {props.linkLabel}
      </a>
    </div>
  );
}
