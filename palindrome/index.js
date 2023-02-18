// Adds `reverse` t4o all strings.
String.prototype.reverse = function reverse(){
	return Array.from(this).reverse().join("");
}



// Defines a Phrase Object.
function Phrase(content){
	this.content = content;

	this.processor = function(string){
		return string.toLowerCase();
	}

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent(){
		return this.processor(this.content);
	}

	// Returns true for a palindrome, false otherwise.
	this.palindrome = function palindrome(){
		return this.processedContent() === this.processedContent().reverse();
	}

	// makes the phrase louder.
	this.louder = function(){
		return this.content.toUpperCase();
	}

}

