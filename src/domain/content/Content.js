
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
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${content.ownerContentId}`)
    },
    templateDataResource: {
      type: DataResourceType,
      args : {templateDataResourceId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${content.templateDataResourceId}`)
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
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`contentTypes/find?contentTypeId=${content.contentTypeId}`)
    },
    description: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString},
    childLeafCount: {type: GraphQLInt},
    serviceName: {type: GraphQLString},
    customMethodId: {type: GraphQLString},
    characterSet: {
      type: CharacterSetType,
      args : {characterSetId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`characterSets/find?characterSetId=${content.characterSetId}`)
    },
    contentName: {type: GraphQLString},
    privilegeEnumId: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${content.lastModifiedByUserLogin}`)
    },
    createdDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    localeString: {type: GraphQLString},
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${content.dataResourceId}`)
    },
    decoratorContent: {
      type: ContentType,
      args : {decoratorContentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${content.decoratorContentId}`)
    },
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${content.createdByUserLogin}`)
    },
    childBranchCount: {type: GraphQLInt},
    webSiteRoles: {
      type: new GraphQLList(WebSiteRoleType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`webSiteRoles/find?contentId=${content.contentId}`)
    },
    commEventContentAssocs: {
      type: new GraphQLList(CommEventContentAssocType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`commEventContentAssocs/find?contentId=${content.contentId}`)
    },
    prodConfItemContents: {
      type: new GraphQLList(ProdConfItemContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`prodConfItemContents/find?contentId=${content.contentId}`)
    },
    webSitePublishPoints: {
      type: new GraphQLList(WebSitePublishPointType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`webSitePublishPoints/find?contentId=${content.contentId}`)
    },
    surveyTriggers: {
      type: new GraphQLList(SurveyTriggerType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`surveyTriggers/find?contentId=${content.contentId}`)
    },
    contentAssocs: {
      type: new GraphQLList(ContentAssocType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentAssocs/find?contentId=${content.contentId}`)
    },
    contentAttributes: {
      type: new GraphQLList(ContentAttributeType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentAttributes/find?contentId=${content.contentId}`)
    },
    contentPurposes: {
      type: new GraphQLList(ContentPurposeType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentPurposes/find?contentId=${content.contentId}`)
    },
    surveyResponseAnswers: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`surveyResponseAnswers/find?contentId=${content.contentId}`)
    },
    partyContents: {
      type: new GraphQLList(PartyContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`partyContents/find?contentId=${content.contentId}`)
    },
    productCategoryContents: {
      type: new GraphQLList(ProductCategoryContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`productCategoryContents/find?contentId=${content.contentId}`)
    },
    workEffortContents: {
      type: new GraphQLList(WorkEffortContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`workEffortContents/find?contentId=${content.contentId}`)
    },
    webSitePathAliases: {
      type: new GraphQLList(WebSitePathAliasType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`webSitePathAliass/find?contentId=${content.contentId}`)
    },
    productContents: {
      type: new GraphQLList(ProductContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`productContents/find?contentId=${content.contentId}`)
    },
    contentMetaDatas: {
      type: new GraphQLList(ContentMetaDataType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentMetaDatas/find?contentId=${content.contentId}`)
    },
    contentRevisions: {
      type: new GraphQLList(ContentRevisionType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentRevisions/find?contentId=${content.contentId}`)
    },
    custRequestContents: {
      type: new GraphQLList(CustRequestContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`custRequestContents/find?contentId=${content.contentId}`)
    },
    vendors: {
      type: new GraphQLList(VendorType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?contentId=${content.contentId}`)
    },
    contentKeywords: {
      type: new GraphQLList(ContentKeywordType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentKeywords/find?contentId=${content.contentId}`)
    },
    contents: {
      type: new GraphQLList(ContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contents/find?contentId=${content.contentId}`)
    },
    invoiceContents: {
      type: new GraphQLList(InvoiceContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`invoiceContents/find?contentId=${content.contentId}`)
    },
    paymentContents: {
      type: new GraphQLList(PaymentContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`paymentContents/find?contentId=${content.contentId}`)
    },
    facilityContents: {
      type: new GraphQLList(FacilityContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`facilityContents/find?contentId=${content.contentId}`)
    },
    webSiteContents: {
      type: new GraphQLList(WebSiteContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`webSiteContents/find?contentId=${content.contentId}`)
    },
    orderContents: {
      type: new GraphQLList(OrderContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`orderContents/find?contentId=${content.contentId}`)
    },
    productPromoContents: {
      type: new GraphQLList(ProductPromoContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`productPromoContents/find?contentId=${content.contentId}`)
    },
    contentApprovals: {
      type: new GraphQLList(ContentApprovalType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentApprovals/find?contentId=${content.contentId}`)
    },
    contentRoles: {
      type: new GraphQLList(ContentRoleType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentRoles/find?contentId=${content.contentId}`)
    },
    agreementContents: {
      type: new GraphQLList(AgreementContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`agreementContents/find?contentId=${content.contentId}`)
    },
    subscriptionResources: {
      type: new GraphQLList(SubscriptionResourceType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`subscriptionResources/find?contentId=${content.contentId}`)
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
    