
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

import {ContentTypeType} from '../content/ContentType.js';
import {ContentAssocType} from '../content/ContentAssoc.js';
import {SurveyTriggerType} from '../content/SurveyTrigger.js';
import {ContentPurposeType} from '../content/ContentPurpose.js';
import {WebSiteRoleType} from '../content/WebSiteRole.js';
import {ContentApprovalType} from '../content/ContentApproval.js';
import {SubscriptionResourceType} from '../product/SubscriptionResource.js';
import {PartyContentType} from '../party/PartyContent.js';
import {WebSitePathAliasType} from '../content/WebSitePathAlias.js';
import {ContentAttributeType} from '../content/ContentAttribute.js';
import {PaymentContentType} from '../accounting/PaymentContent.js';
import {ContentRoleType} from '../content/ContentRole.js';
import {CharacterSetType} from '../content/CharacterSet.js';
import {CommEventContentAssocType} from '../party/CommEventContentAssoc.js';
import {UserLoginType} from '../login/UserLogin.js';
import {WorkEffortContentType} from '../workeffort/WorkEffortContent.js';
import {InvoiceContentType} from '../accounting/InvoiceContent.js';
import {CustRequestContentType} from '../order/CustRequestContent.js';
import {OrderContentType} from '../order/OrderContent.js';
import {SurveyResponseAnswerType} from '../content/SurveyResponseAnswer.js';
import {ContentRevisionType} from '../content/ContentRevision.js';
import {DataResourceType} from '../content/DataResource.js';
import {WebSitePublishPointType} from '../content/WebSitePublishPoint.js';
import {VendorType} from '../party/Vendor.js';
import {ProductContentType} from '../product/ProductContent.js';
import {ContentMetaDataType} from '../content/ContentMetaData.js';
import {ProductPromoContentType} from '../product/ProductPromoContent.js';
import {ContentKeywordType} from '../content/ContentKeyword.js';
import {AgreementContentType} from '../party/AgreementContent.js';
import {ProdConfItemContentType} from '../product/ProdConfItemContent.js';
import {ProductCategoryContentType} from '../product/ProductCategoryContent.js';
import {FacilityContentType} from '../product/FacilityContent.js';
import {WebSiteContentType} from '../content/WebSiteContent.js';


const ContentType = new GraphQLObjectType({
  name: 'ContentType',
  description: 'Type for Content in content',

  fields: () => ({
    ownerContent: {
      type: ContentType,
      args : {ownerContentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${content.ownerContentId}`)
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
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${content.instanceOfContentId}`)
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
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${content.decoratorContentId}`)
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
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`/contents/find?contentId=${content.contentId}`)
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
    




const ContentInputType = new GraphQLInputObjectType({
  name: 'ContentInputType',
  description: 'input type for Content in content',

  fields: () => ({
    ownerContentId: {type: GraphQLString},
    templateDataResourceId: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    instanceOfContentId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    contentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString},
    childLeafCount: {type: GraphQLInt},
    serviceName: {type: GraphQLString},
    customMethodId: {type: GraphQLString},
    characterSetId: {type: GraphQLString},
    contentName: {type: GraphQLString},
    privilegeEnumId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    localeString: {type: GraphQLString},
    dataResourceId: {type: GraphQLString},
    decoratorContentId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    childBranchCount: {type: GraphQLInt}
  })
});

export {ContentInputType};
    