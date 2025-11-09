const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-8">
      <div className="container-custom">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} TriFusion Management GmbH. All rights reserved.
          </p>
          <p className="text-sm">
            Am Flutgraben 53, 41515 Grevenbroich, Germany | HRB 23694
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
