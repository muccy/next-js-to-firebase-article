import Header from './Header';

const layoutStyle: React.CSSProperties = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

type Props = { children: React.ReactNode };

const Layout = (props: Props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;