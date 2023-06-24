

export const ContentDisplay = ({ retrievedContent }: {retrievedContent:string}) => {
  const paragraphs = retrievedContent.split('\n').map((paragraph, index) => (
    <p key={index} className="leading-normal mt-4">{paragraph}</p>
  ));

  return (
    <>{paragraphs}</>
  );
};


