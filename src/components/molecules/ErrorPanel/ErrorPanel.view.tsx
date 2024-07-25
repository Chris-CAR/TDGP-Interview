import { Text, Container, PanelAlert } from 'squid-navalweb-ui';
import { ErrorPanelProps } from './ErrorPanel.model';

function ErrorPanelView({ errorMessage, closeError, errorNumber }: Readonly<ErrorPanelProps>) {
  return (
    <PanelAlert
      hasBorder={true}
      label={`ERROR ${errorNumber > 1 ? errorNumber : ''}`}
      bodyType="content"
      titleBodyType="danger"
      onClose={closeError}
      width="550px"
      height={`min(80%, auto)`}
    >
      <Container
        width="100%"
        bodyType="content"
        padding="10px 30px 10px 30px"
        horizontalAlign="center"
      >
        <Text invertedColors>{errorMessage}</Text>
      </Container>
    </PanelAlert>
  );
}

export default ErrorPanelView;
