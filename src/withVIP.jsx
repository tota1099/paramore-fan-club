// HOC é uma função que começa com letra minúscula (convenção)
const withVIPAccess = (WrappedComponent) => {
  return (props) => {
    const isVipMember = props.isVip;

    if (!isVipMember) {
      return (
        <div style={{ border: '1px solid red', padding: '10px', margin: '10px 0' }}>
          <h3>🚫 Acesso Negado</h3>
          <p>Você precisa ser membro do Paramore Fan Club para ver isso.</p>
        </div>
      );
    }

    // Se for VIP, renderiza o componente original com todas as props
    return <WrappedComponent {...props} />;
  };
};

export default withVIPAccess;