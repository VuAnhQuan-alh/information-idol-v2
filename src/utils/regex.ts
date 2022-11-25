class Regex {
  public number = /^[0-9]*$/;
  public email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
  public phone = /^[0-9]{10}$/;
}

export default new Regex();
