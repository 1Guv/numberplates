export class PercentageIncrease {
    dateless: number;
    prefix: number;
    suffix: number;
    current: number;
    irish: number;

    constructor() {
      this.dateless = 0.35; // Override in getPercentageIncrease()
      this.suffix = 0.30;
      this.prefix = 0.20;
      this.current = 0.15;
      this.irish = 0.10;
    }
  }

export class QuestionValues {
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;

  constructor() {
    this.q1 = 0.1;
    this.q2 = 0.2;
    this.q3 = 0.2;
    this.q4 = 0.2;
    this.q5 = 0.3;
    this.q6 = 0.1;
  }
}
