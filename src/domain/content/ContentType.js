
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentTypeType} from '../content/ContentTypeType.js';
import {ContentAssocType} from '../content/ContentAssocType.js';
import {SurveyTriggerType} from '../content/SurveyTriggerType.js';
import {ContentPurposeType} from '../content/ContentPurposeType.js';
import {WebSiteRoleType} from '../content/WebSiteRoleType.js';
import {ContentApprovalType} from '../content/ContentApprovalType.js';
import {SubscriptionResourceType} from '../product/SubscriptionResourceType.js';
import {PartyContentType} from '../party/PartyContentType.js';
import {WebSitePathAliasType} from '../content/WebSitePathAliasType.js';
import {ContentAttributeType} from '../content/ContentAttributeType.js';
import {PaymentContentType} from '../accounting/PaymentContentType.js';
import {ContentRoleType} from '../content/ContentRoleType.js';
import {CharacterSetType} from '../content/CharacterSetType.js';
import {CommEventContentAssocType} from '../party/CommEventContentAssocType.js';
import {UserLoginType} from '../login/UserLoginType.js';
import {WorkEffortContentType} from '../workeffort/WorkEffortContentType.js';
import {InvoiceContentType} from '../accounting/InvoiceContentType.js';
import {CustRequestContentType} from '../order/CustRequestContentType.js';
import {OrderContentType} from '../order/OrderContentType.js';
import {SurveyResponseAnswerType} from '../content/SurveyResponseAnswerType.js';
import {ContentRevisionType} from '../content/ContentRevisionType.js';
import {DataResourceType} from '../content/DataResourceType.js';
import {WebSitePublishPointType} from '../content/WebSitePublishPointType.js';
import {VendorType} from '../party/VendorType.js';
import {ProductContentType} from '../product/ProductContentType.js';
import {ContentMetaDataType} from '../content/ContentMetaDataType.js';
import {ProductPromoContentType} from '../product/ProductPromoContentType.js';
import {ContentKeywordType} from '../content/ContentKeywordType.js';
import {AgreementContentType} from '../party/AgreementContentType.js';
import {ProdConfItemContentType} from '../product/ProdConfItemContentType.js';
import {ProductCategoryContentType} from '../product/ProductCategoryContentType.js';
import {FacilityContentType} from '../product/FacilityContentType.js';
import {WebSiteContentType} from '../content/WebSiteContentType.js';


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
    webSiteRole: {
      type: new GraphQLList(WebSiteRoleType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`webSiteRoles/find?contentId=${content.contentId}`)
    },
    commEventContentAssoc: {
      type: new GraphQLList(CommEventContentAssocType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`commEventContentAssocs/find?contentId=${content.contentId}`)
    },
    prodConfItemContent: {
      type: new GraphQLList(ProdConfItemContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`prodConfItemContents/find?contentId=${content.contentId}`)
    },
    webSitePublishPoint: {
      type: new GraphQLList(WebSitePublishPointType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`webSitePublishPoints/find?contentId=${content.contentId}`)
    },
    surveyTrigger: {
      type: new GraphQLList(SurveyTriggerType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`surveyTriggers/find?contentId=${content.contentId}`)
    },
    contentAssoc: {
      type: new GraphQLList(ContentAssocType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentAssocs/find?contentId=${content.contentId}`)
    },
    contentAttribute: {
      type: new GraphQLList(ContentAttributeType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentAttributes/find?contentId=${content.contentId}`)
    },
    contentPurpose: {
      type: new GraphQLList(ContentPurposeType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentPurposes/find?contentId=${content.contentId}`)
    },
    surveyResponseAnswer: {
      type: new GraphQLList(SurveyResponseAnswerType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`surveyResponseAnswers/find?contentId=${content.contentId}`)
    },
    partyContent: {
      type: new GraphQLList(PartyContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`partyContents/find?contentId=${content.contentId}`)
    },
    productCategoryContent: {
      type: new GraphQLList(ProductCategoryContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`productCategoryContents/find?contentId=${content.contentId}`)
    },
    workEffortContent: {
      type: new GraphQLList(WorkEffortContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`workEffortContents/find?contentId=${content.contentId}`)
    },
    webSitePathAlias: {
      type: new GraphQLList(WebSitePathAliasType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`webSitePathAliass/find?contentId=${content.contentId}`)
    },
    productContent: {
      type: new GraphQLList(ProductContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`productContents/find?contentId=${content.contentId}`)
    },
    contentMetaData: {
      type: new GraphQLList(ContentMetaDataType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentMetaDatas/find?contentId=${content.contentId}`)
    },
    contentRevision: {
      type: new GraphQLList(ContentRevisionType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentRevisions/find?contentId=${content.contentId}`)
    },
    custRequestContent: {
      type: new GraphQLList(CustRequestContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`custRequestContents/find?contentId=${content.contentId}`)
    },
    vendor: {
      type: new GraphQLList(VendorType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`vendors/find?contentId=${content.contentId}`)
    },
    contentKeyword: {
      type: new GraphQLList(ContentKeywordType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentKeywords/find?contentId=${content.contentId}`)
    },
    content: {
      type: new GraphQLList(ContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contents/find?contentId=${content.contentId}`)
    },
    invoiceContent: {
      type: new GraphQLList(InvoiceContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`invoiceContents/find?contentId=${content.contentId}`)
    },
    paymentContent: {
      type: new GraphQLList(PaymentContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`paymentContents/find?contentId=${content.contentId}`)
    },
    facilityContent: {
      type: new GraphQLList(FacilityContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`facilityContents/find?contentId=${content.contentId}`)
    },
    webSiteContent: {
      type: new GraphQLList(WebSiteContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`webSiteContents/find?contentId=${content.contentId}`)
    },
    orderContent: {
      type: new GraphQLList(OrderContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`orderContents/find?contentId=${content.contentId}`)
    },
    productPromoContent: {
      type: new GraphQLList(ProductPromoContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`productPromoContents/find?contentId=${content.contentId}`)
    },
    contentApproval: {
      type: new GraphQLList(ContentApprovalType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentApprovals/find?contentId=${content.contentId}`)
    },
    contentRole: {
      type: new GraphQLList(ContentRoleType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`contentRoles/find?contentId=${content.contentId}`)
    },
    agreementContent: {
      type: new GraphQLList(AgreementContentType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`agreementContents/find?contentId=${content.contentId}`)
    },
    subscriptionResource: {
      type: new GraphQLList(SubscriptionResourceType),
      args : {contentId: {type: GraphQLString}},
      resolve: (content, args, {loaders}) => loaders.ofbizArray.load(`subscriptionResources/find?contentId=${content.contentId}`)
    }
  })
});

export {ContentType};
    