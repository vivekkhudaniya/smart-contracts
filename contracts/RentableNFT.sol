import "./ERC4907";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RentableNFT is ERC4907,Ownable{

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 baseAmount = 2000000000000;

    struct RentableItems{
        bool isRentable;
        uint256 amountPerMinute;
    }

    mapping(uint256 => RentableNFT) public rentables;

    constructor(string memory _name,string memory _symbol) ERC4907 (_name,_symbol){

    }

    function safeMint(address to) public onlyOwner{
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to,tokenId);
        rentables[tokenId] = RentableItems(false,baseAmount);
    }

    

}