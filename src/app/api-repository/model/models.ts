export interface Accommodation {
  availableSlots?: number;
  category?: string;
  classification?: string;
  id?: string;
  pricingMode?: string;
  product?: Product_;
  travelerReferences?: Array<string>;
}

export interface AccommodationId {
  href?: string;
  id?: string;
  methods?: Array<string>;
}

export interface AccommodationPreference {
  availablePreferences?: AvailablePreferences;
  segmentId?: string;
}

export interface Actor {
  dateOfBirth?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  orderItemIds?: Array<OrderItemId>;
  roles?: Array<string>;
}

export interface ActorId {
  href?: string;
  id?: string;
  methods?: Array<string>;
}

export interface ActorRequest {
  firstName?: string;
  id?: string;
  lastName?: string;
}

export interface ActorResponse {
  data?: Array<DataActors>;
}

export interface Admission {
  availableSlots?: number;
  id?: string;
  includedAccommodationIds?: Array<IncludedAccommodationId>;
  priceDetails?: PriceDetails;
  pricingMode?: string;
  products?: Array<Product_>;
  providerReference?: string;
  travelerReferences?: Array<string>;
}

export interface AdmissionId {
  href?: string;
  id?: string;
  methods?: Array<string>;
}

export interface Admissions {
  id?: string;
  priceDetails?: PriceDetails;
  pricingMode?: string;
  products?: Array<Products>;
  travelerReferences?: string;
}

export interface AfterSalesConditions {
  exchangeConditions?: ExchangeConditions;
  refundConditions?: RefundConditions;
}

export interface Amount {
  amount?: string;
  currency?: string;
}

export interface AvailablePreferences {
  environmentOptions?: Array<string>;
  nearToOption?: boolean;
  positionOptions?: Array<string>;
  specifiedPlaceOption?: boolean;
}

export interface BasicTransportInformation {
  carrierCode?: string;
  transportType?: string;
  vehicleCategory?: string;
  vehicleCode?: string;
}

export interface Card {
  vendorCode?: string;
}

export interface CartRequest {
  offerId?: string;
}

export interface CartResponse {
  data?: CartResponseData;
}

export interface CartResponseData {
  creationTime?: string;
  expirationTime?: string;
  id?: string;
  selectedOffers?: SelectedOffers;
  totalPrice?: TotalPrice;
  travelers?: Array<Travelers>;
}

export interface Condition {
  condition?: string;
}

export interface Conditions {
  condition?: string;
  conditionType?: string;
}

export interface DataActors {
  dateOfBirth?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  orderItemIds?: Array<OrderItemId>;
  roles?: Array<string>;
}

export interface DataItinerary {
  arrivalDateTime?: string;
  basicTransportInformation?: Array<BasicTransportInformation>;
  bookableStatus?: string;
  departureDateTime?: string;
  destination?: Station;
  duration?: string;
  ecoUrl?: string;
  id?: string;
  includesANightTrain?: boolean;
  numberOfChanges?: number;
  origin?: Station;
  reconstructionId?: string;
  segments?: Array<Segment>;
}

export interface DataSearch {
  id?: string;
  scrollToken?: ScrollToken;
  timeRange?: TimeRange;
  timeToLive?: string;
  travelOffers?: Array<TravelOffer>;
}

export interface DateTime {
  departure?: string;
}

export interface DeliveryInfo {
  recipientEmails?: RecipientEmails;
}

export interface Document {
  active?: boolean;
  documentType?: string;
  groupReferences?: Array<string>;
  history?: Array<History>;
  id?: string;
  mediaType?: string;
  relatedActorsIds?: Array<RelatedActorsId>;
  relatedTicketIds?: Array<RelatedTicketId>;
}

export interface ExchangeConditions {
  isExchangeable?: boolean;
}

export interface FinancialTransaction {
  confirmationDate?: string;
  id?: string;
  orderId?: string;
  paymentBreakdown?: Array<PaymentBreakdown>;
  paymentRecordId?: string;
  status?: string;
  transactionType?: string;
}

export interface GlobalTravelClass {
  code?: string;
}

export interface Headers {
  accept?: Array<string>;
  acceptEncoding?: Array<string>;
  acceptLanguage?: Array<string>;
  authorization?: Array<string>;
  cacheControl?: Array<string>;
  connection?: Array<string>;
  contentLength?: Array<string>;
  contentType?: Array<string>;
  date?: Array<string>;
  host?: Array<string>;
  origin?: Array<string>;
  postmanToken?: Array<string>;
  secFetchMode?: Array<string>;
  secFetchSite?: Array<string>;
  userAgent?: Array<string>;
  vary?: Array<string>;
}

export interface History {
  action?: string;
  actionDate?: string;
  deliveryInfo?: DeliveryInfo;
}

export interface Included {
  documents?: Array<Document>;
  financialTransactions?: Array<FinancialTransaction>;
  tickets?: Array<Ticket>;
}

export interface IncludedAccommodationId {
  href?: string;
  id?: string;
}

export interface Issuance {
  issuanceDateTime?: string;
  price?: Price;
  ticketingOption?: TicketingOption;
}

export interface ItinerariesResponse {
  data?: DataItinerary;
}

export interface Itinerary {
  arrivalDateTime?: string;
  basicTransportInformation?: Array<BasicTransportInformation>;
  bookableStatus?: string;
  departureDateTime?: string;
  destination?: Station;
  duration?: string;
  ecoUrl?: string;
  id?: string;
  includesANightTrain?: boolean;
  numberOfChanges?: number;
  origin?: Station;
  reconstructionId?: string;
  segments?: Array<OrderSegment>;
}

export interface ItineraryId {
  href?: string;
  id?: string;
  methods?: Array<string>;
}

export interface LinkedSegment {
  segmentId?: string;
}

export interface LinkedSegments {
  segmentId?: string;
}

export interface LogInfo {
  _id?: string;
  body?: {};
  correlation?: string;
  duration?: string;
  headers?: Headers;
  method?: string;
  origin?: string;
  protocol?: string;
  remote?: string;
  status?: number;
  type?: string;
  uri?: string;
}

export interface MethodOfPayment {
  card?: Card;
  methodOfPaymentCode?: string;
}

export interface OfferGlobalTravelClass {
  code?: string;
}

export interface OfferTotalPrice {
  amount?: string;
  currency?: string;
}

export interface OfferTraveler {
  dateOfBirth?: string;
  id?: string;
}

export interface OffersData {
  accommodationCategory?: string;
  accommodationPreferences?: Array<AccommodationPreference>;
  accommodations?: Array<Accommodation>;
  admissions?: Array<Admission>;
  areCorporateCodesApplied?: boolean;
  areReductionCardsApplied?: boolean;
  containsIncludedAncillaries?: boolean;
  direction?: string;
  flexibilityLevel?: string;
  globalTravelClass?: GlobalTravelClass;
  id?: string;
  itineraryId?: ItineraryId;
  lowestAvailableSlots?: number;
  ticketingOptions?: Array<TicketingOption>;
  totalPrice?: OfferTotalPrice;
  travelers?: Array<OfferTraveler>;
  withRestrictions?: boolean;
}

export interface OffersResponse {
  data?: OffersData;
}

export interface OrderCondition {
  condition?: string;
  conditionType?: string;
}

export interface OrderItem {
  admissions?: Array<Admission>;
  direction?: string;
  groupReference?: string;
  id?: string;
  itinerary?: Itinerary;
  offerAccommodationCategory?: string;
  offerFlexibilityLevel?: string;
  offerGlobalTravelClass?: OfferGlobalTravelClass;
  offerTags?: Array<string>;
  totalPrice?: OfferTotalPrice;
}

export interface OrderItemId {
  id?: string;
}

export interface OrderSegment {
  arrivalDateTime?: string;
  arrivalStation?: Station;
  arrivalTrack?: string;
  bookableStatus?: string;
  carrierCode?: string;
  departureDateTime?: string;
  departureStation?: Station;
  departureTrack?: string;
  id?: string;
  stopStations?: Array<StopStation>;
  transportType?: string;
  vehicle?: Vehicle;
}

export interface OrderTicketingOption {
  requiredInfo?: Array<RequiredInfo>;
  selected?: boolean;
  ticketType?: string;
}

export interface OrdersData {
  actors?: Array<Actor>;
  id?: string;
  orderItems?: Array<OrderItem>;
  paymentOptions?: Array<PaymentOption>;
  pnrRecordLocator?: string;
  recipientEmails?: RecipientEmails;
  state?: State;
  ticketTimeLimit?: TicketTimeLimit;
  ticketingOptions?: Array<OrderTicketingOption>;
  totalPrice?: TotalPrice;
}

export interface OrdersProduct {
  code?: string;
  conditions?: Array<OrderCondition>;
  description?: string;
  family?: string;
  flexibility?: string;
  linkedSegments?: Array<LinkedSegment>;
  productCharacteristics?: Array<string>;
  serviceProvider?: string;
  tags?: Array<string>;
  travelClass?: TravelClass;
}

export interface OrdersRequest {
  source?: Source;
}

export interface OrdersResponse {
  data?: OrdersData;
  included?: Included;
}

export interface PaymentBreakdown {
  amount?: Amount;
  methodOfPayment?: MethodOfPayment;
}

export interface PaymentOption {
  id?: string;
  methodOfPayment?: MethodOfPayment;
  selected?: boolean;
}

export interface PaymentOptions {
  paymentOptions?: Array<PaymentOption>;
}

export interface PaymentOptionsResponse {
  data?: Array<PaymentOption>;
}

export interface Price {
  currency?: string;
  total?: string;
}

export interface PriceDetails {
  currency?: string;
  total?: string;
}

export interface Product_ {
  code?: string;
  conditions?: Array<Condition>;
  description?: string;
  family?: string;
  flexibility?: string;
  linkedSegments?: Array<LinkedSegment>;
  productCharacteristics?: Array<string>;
  ticketingOptions?: Array<TicketingOption>;
  travelClass?: TravelClass;
}

export interface Products {
  code?: string;
  conditions?: Array<Conditions>;
  description?: string;
  family?: string;
  flexibility?: string;
  linkedSegments?: Array<LinkedSegments>;
  productCharacteristics?: Array<string>;
  tags?: Array<string>;
  travelClass?: TravelClass;
}

export interface PspOptions {
  _3DSecure?: boolean;
  customerEmail?: string;
  customerId?: string;
  customerName?: string;
  declinedUrl?: string;
  exceptionUrl?: string;
  language?: string;
  refusedUrl?: string;
  successUrl?: string;
  templateName?: string;
  title?: string;
}

export interface RailkitSetting {
  id?: number;
  railkitMock?: boolean;
}

export interface RecipientEmails {
  formattingLanguage?: string;
  roles?: Array<string>;
}

export interface RefundConditions {
  isRefundable?: boolean;
}

export interface RelatedActorsId {
  id?: string;
}

export interface RelatedTicketId {
  href?: string;
  id?: string;
  methods?: Array<string>;
}

export interface RequiredInfo {
  actorId?: string;
  requiredActorData?: string;
}

export interface ScrollToken {
  earlier?: string;
  later?: string;
}

export interface SearchTraveler {
  dateOfBirth?: string;
}

export interface Segment {
  arrivalDateTime?: string;
  arrivalStation?: Station;
  arrivalTrack?: string;
  bookableStatus?: string;
  carrierCode?: string;
  co2Emission?: string;
  departureDateTime?: string;
  departureStation?: Station;
  departureTrack?: string;
  duration?: string;
  id?: string;
  servicesOnBoard?: Array<ServicesOnBoard>;
  stopStations?: Array<StopStation>;
  transportType?: string;
  vehicle?: Vehicle;
}

export interface SelectedOffers {
  accommodationCategory?: string;
  accommodations?: Array<Accommodation>;
  admissions?: Admissions;
  ancillaries?: any;
  direction?: string;
  flexibilityLevel?: string;
  globalTravelClass?: GlobalTravelClass;
  id?: string;
  itineraryId?: ItineraryId;
  totalPrice?: TotalPrice;
  withRestrictions?: boolean;
}

export interface ServicesOnBoard {
  code?: string;
}

export interface Source {
  cartId?: string;
  example?: string;
  parameter?: string;
  pointer?: string;
}

export interface State {
  exchangeInProgress?: boolean;
  locked?: boolean;
}

export interface Station {
  code?: string;
  name?: string;
}

export interface StopStation {
  arrivalDateTime?: string;
  arrivalTrack?: string;
  borderPoint?: boolean;
  departureDateTime?: string;
  departureTrack?: string;
  station?: Station;
}

export interface Ticket {
  accommodationIds?: Array<AccommodationId>;
  actorIds?: Array<ActorId>;
  admissionIds?: Array<AdmissionId>;
  afterSalesConditions?: AfterSalesConditions;
  distributorCode?: string;
  distributorTicketNumber?: string;
  groupReference?: string;
  id?: string;
  issuance?: Issuance;
  orderItemId?: OrderItemId;
  providerTicketNumber?: string;
  status?: string;
}

export interface TicketTimeLimit {
  effectiveTicketTimeLimit?: string;
  overridden?: boolean;
  overrideAllowed?: boolean;
  technicalTicketTimeLimit?: string;
}

export interface TicketingOption {
  ticketType?: string;
}

export interface TimeRange {
  endDateTime?: string;
  startDateTime?: string;
}

export interface TotalPrice {
  currency?: string;
  total?: string;
}


export interface TravelClass {
  code?: string;
}

export interface TravelOffer {
  id?: string;
  itinerary?: Itinerary;
  offers?: Array<OffersData>;
}

export interface Travelers {
  dateOfBirth?: Array<string>;
  id?: string;
  retrievedFromProfile?: boolean;
}

export interface TravelersInInput {
  travelers?: Array<SearchTraveler>;
}

export interface Vehicle {
  category?: string;
  code?: string;
  description?: string;
  displayName?: string;
  number?: string;
  vehicleTypes?: Array<string>;
}

export interface DataSearch {
  id?: string;
  scrollToken?: ScrollToken;
  timeRange?: TimeRange;
  timeToLive?: string;
  travelOffers?: Array<TravelOffer>;
}
