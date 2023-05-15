const {palindromo}=require("../utils/for_testing");

test("palindrome of midudev",() =>{
    const result=palindromo("midudev");

    expect(result).toBe("vedudim");
});

test("palindrome of empty string",() =>{
    const result=palindromo("");

    expect(result).toBe("");
});


test("palindrome of undefine",() =>{
    const result=palindromo();

    expect(result).toBeUndefined();
}); 