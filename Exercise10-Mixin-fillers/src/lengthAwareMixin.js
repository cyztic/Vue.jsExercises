export const lengthAwareMixin = {
    data() {
        return {

        }
    },
    computed: {
        letterCount() {
            //let letters = String(this.howManyLs.length);
            return this.howManyLs + '(' + this.howManyLs.length + ')';
        }
    }
}