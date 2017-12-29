
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentTypeType} from '../../content/ContentType/ContentTypeType.js';
import {ContentAssocType} from '../../content/ContentAssoc/ContentAssocType.js';
import {SurveyTriggerType} from '../../content/SurveyTrigger/SurveyTriggerType.js';
import {ContentPurposeType} from '../../content/ContentPurpose/ContentPurposeType.js';
import {WebSiteRoleType} from '../../content/WebSiteRole/WebSiteRoleType.js';
import {ContentApprovalType} from '../../content/ContentApproval/ContentApprovalType.js';
import {SubscriptionResourceType} from '../../product/SubscriptionResource/SubscriptionResourceType.js';
import {PartyContentType} from '../../party/PartyContent/PartyContentType.js';
import {WebSitePathAliasType} from '../../content/WebSitePathAlias/WebSitePathAliasType.js';
import {ContentAttributeType} from '../../content/ContentAttribute/ContentAttributeType.js';
import {PaymentContentType} from '../../accounting/PaymentContent/PaymentContentType.js';
import {ContentRoleType} from '../../content/ContentRole/ContentRoleType.js';
import {CharacterSetType} from '../../content/CharacterSet/CharacterSetType.js';
import {CommEventContentAssocType} from '../../party/CommEventContentAssoc/CommEventContentAssocType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';
import {WorkEffortContentType} from '../../workeffort/WorkEffortContent/WorkEffortContentType.js';
import {InvoiceContentType} from '../../accounting/InvoiceContent/InvoiceContentType.js';
import {CustRequestContentType} from '../../order/CustRequestContent/CustRequestContentType.js';
import {OrderContentType} from '../../order/OrderContent/OrderContentType.js';
import {SurveyResponseAnswerType} from '../../content/SurveyResponseAnswer/SurveyResponseAnswerType.js';
import {ContentRevisionType} from '../../content/ContentRevision/ContentRevisionType.js';
import {DataResourceType} from '../../content/DataResource/DataResourceType.js';
import {WebSitePublishPointType} from '../../content/WebSitePublishPoint/WebSitePublishPointType.js';
import {VendorType} from '../../party/Vendor/VendorType.js';
import {ProductContentType} from '../../product/ProductContent/ProductContentType.js';
import {ContentMetaDataType} from '../../content/ContentMetaData/ContentMetaDataType.js';
import {ProductPromoContentType} from '../../product/ProductPromoContent/ProductPromoContentType.js';
import {ContentKeywordType} from '../../content/ContentKeyword/ContentKeywordType.js';
import {AgreementContentType} from '../../party/AgreementContent/AgreementContentType.js';
import {ProdConfItemContentType} from '../../product/ProdConfItemContent/ProdConfItemContentType.js';
import {ProductCategoryContentType} from '../../product/ProductCategoryContent/ProductCategoryContentType.js';
import {FacilityContentType} from '../../product/FacilityContent/FacilityContentType.js';
import {WebSiteContentType} from '../../content/WebSiteContent/WebSiteContentType.js';


const ContentType = new GraphQLObjectType({
  name: 'ContentType',
  description: 'Type for Content in content',

  fields: () => ({
    ownerContent: {
      type: ContentType,
      args : {ownerContentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${content.ownerContentId}`)
    },
    templateDataResource: {
      type: DataResourceType,
      args : {templateDataResourceId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${content.templateDataResourceId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    instanceOfContent: {
      type: ContentType,
      args : {instanceOfContentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${content.instanceOfContentId}`)
    },
    contentId: {type: GraphQLString},
    contentType: {
      type: ContentTypeType,
      args : {contentTypeId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`content/content/contentTypes/find?contentTypeId=${content.contentTypeId}`)
    },
    description: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString},
    childLeafCount: {type: GraphQLInt},
    serviceName: {type: GraphQLString},
    customMethodId: {type: GraphQLString},
    characterSet: {
      type: CharacterSetType,
      args : {characterSetId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`content/characterSets/find?characterSetId=${content.characterSetId}`)
    },
    contentName: {type: GraphQLString},
    privilegeEnumId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${content.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    localeString: {type: GraphQLString},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${content.dataResourceId}`)
    },
    decoratorContent: {
      type: ContentType,
      args : {decoratorContentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${content.decoratorContentId}`)
    },
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${content.createdByUserLogin}`)
    },
    childBranchCount: {type: GraphQLInt},
    webSiteRoles: {
      type: new GraphQLList(WebSiteRoleType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/webSiteRoles/find?contentId=${content.contentId}`)
    },
    commEventContentAssocs: {
      type: new GraphQLList(CommEventContentAssocType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`party/commEventContentAssocs/find?contentId=${content.contentId}`)
    },
    prodConfItemContents: {
      type: new GraphQLList(ProdConfItemContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`product/prodConfItemContents/find?contentId=${content.contentId}`)
    },
    webSitePublishPoints: {
      type: new GraphQLList(WebSitePublishPointType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/webSitePublishPoints/find?contentId=${content.contentId}`)
    },
    surveyTriggers: {
      type: new GraphQLList(SurveyTriggerType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyTriggers/find?contentId=${content.contentId}`)
    },
    contentAssocs: {
      type: new GraphQLList(ContentAssocType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentAssocs/find?contentId=${content.contentId}`)
    },
    contentAttributes: {
      type: new GraphQLList(ContentAttributeType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentAttributes/find?contentId=${content.contentId}`)
    },
    contentPurposes: {
      type: new GraphQLList(ContentPurposeType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentPurposes/find?contentId=${content.contentId}`)
    },
    surveyResponseAnswers: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/survey/surveyResponseAnswers/find?contentId=${content.contentId}`)
    },
    partyContents: {
      type: new GraphQLList(PartyContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyContents/find?contentId=${content.contentId}`)
    },
    productCategoryContents: {
      type: new GraphQLList(ProductCategoryContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryContents/find?contentId=${content.contentId}`)
    },
    workEffortContents: {
      type: new GraphQLList(WorkEffortContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortContents/find?contentId=${content.contentId}`)
    },
    webSitePathAliases: {
      type: new GraphQLList(WebSitePathAliasType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/webSitePathAliass/find?contentId=${content.contentId}`)
    },
    productContents: {
      type: new GraphQLList(ProductContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`product/product/productContents/find?contentId=${content.contentId}`)
    },
    contentMetaDatas: {
      type: new GraphQLList(ContentMetaDataType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentMetaDatas/find?contentId=${content.contentId}`)
    },
    contentRevisions: {
      type: new GraphQLList(ContentRevisionType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentRevisions/find?contentId=${content.contentId}`)
    },
    custRequestContents: {
      type: new GraphQLList(CustRequestContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`order/custRequest/custRequestContents/find?contentId=${content.contentId}`)
    },
    vendors: {
      type: new GraphQLList(VendorType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`party/vendors/find?contentId=${content.contentId}`)
    },
    contentKeywords: {
      type: new GraphQLList(ContentKeywordType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentKeywords/find?contentId=${content.contentId}`)
    },
    contents: {
      type: new GraphQLList(ContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contents/find?contentId=${content.contentId}`)
    },
    invoiceContents: {
      type: new GraphQLList(InvoiceContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceContents/find?contentId=${content.contentId}`)
    },
    paymentContents: {
      type: new GraphQLList(PaymentContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentContents/find?contentId=${content.contentId}`)
    },
    facilityContents: {
      type: new GraphQLList(FacilityContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityContents/find?contentId=${content.contentId}`)
    },
    webSiteContents: {
      type: new GraphQLList(WebSiteContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/content/webSiteContents/find?contentId=${content.contentId}`)
    },
    orderContents: {
      type: new GraphQLList(OrderContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`order/orderContents/find?contentId=${content.contentId}`)
    },
    productPromoContents: {
      type: new GraphQLList(ProductPromoContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoContents/find?contentId=${content.contentId}`)
    },
    contentApprovals: {
      type: new GraphQLList(ContentApprovalType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentApprovals/find?contentId=${content.contentId}`)
    },
    contentRoles: {
      type: new GraphQLList(ContentRoleType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentRoles/find?contentId=${content.contentId}`)
    },
    agreementContents: {
      type: new GraphQLList(AgreementContentType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`party/agreement/agreementContents/find?contentId=${content.contentId}`)
    },
    subscriptionResources: {
      type: new GraphQLList(SubscriptionResourceType),
      args : {},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`product/subscription/subscriptionResources/find?contentId=${content.contentId}`)
    }
  })
});

export {ContentType};
    