import { Listing } from '../../generated/schema';

import {
  BigInt,
  BigDecimal,
  Bytes,
  ethereum,
  Address,
  log,
} from "@graphprotocol/graph-ts";

import {
  Listed as ListedEvent,
  Sale as SaleEvent,
  CancelBid as CancelListingEvent,
  Marketplace
} from "../../generated/Marketplace/Marketplace";

enum ListingStatus { Active, Sold, Cancelled }

export function handleListed(event: ListedEvent): void {
  const listingId = event.params.listingId

  const stat = new Listing(listingId.toString());

  stat.listingStatus = ListingStatus.Active.toString();
  stat.seller = event.params.seller;
  stat.token = event.params.token;
  stat.tokenId = event.params.tokenId;

  stat.save();
}

export function handleSale(event: SaleEvent): void {
  const listingId = event.params.listingId

  const listing = Listing.load(listingId.toString());

  if (!listing) throw new Error('Listing entity is not found');

  listing.listingStatus = ListingStatus.Sold.toString();
  listing.buyer = event.params.buyer;

  listing.save();
}

export function handleListingCancel(event: CancelListingEvent): void {
  const listingId = event.params.listingId

  const listing = Listing.load(listingId.toString());

  if (!listing) throw new Error('Listing entity is not found');

  listing.listingStatus = ListingStatus.Cancelled.toString();

  listing.save();
}