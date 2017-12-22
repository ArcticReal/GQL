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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createBudget = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudget method',
  args:{comments: {type: GraphQLString},budgetTypeId: {type: GraphQLString},budgetId: {type: GraphQLString},customTimePeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudget?comments=${args.comments}budgetTypeId=${args.budgetTypeId}budgetId=${args.budgetId}customTimePeriodId=${args.customTimePeriodId}`, null, req);
  }
};
export {createBudget};


const createBudgetAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetAttribute method',
  args:{budgetId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetAttribute?budgetId=${args.budgetId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createBudgetAttribute};


const createBudgetItem = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetItem method',
  args:{budgetId: {type: GraphQLString},amount: {type: GraphQLFloat},purpose: {type: GraphQLString},budgetItemTypeId: {type: GraphQLString},justification: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetItem?budgetId=${args.budgetId}amount=${args.amount}purpose=${args.purpose}budgetItemTypeId=${args.budgetItemTypeId}justification=${args.justification}`, null, req);
  }
};
export {createBudgetItem};


const createBudgetItemAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetItemAttribute method',
  args:{budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetItemAttribute?budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {createBudgetItemAttribute};


const createBudgetItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetItemType method',
  args:{parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString},budgetItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetItemType?parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}budgetItemTypeId=${args.budgetItemTypeId}`, null, req);
  }
};
export {createBudgetItemType};


const createBudgetItemTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetItemTypeAttr method',
  args:{budgetItemTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetItemTypeAttr?budgetItemTypeId=${args.budgetItemTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createBudgetItemTypeAttr};


const createBudgetReview = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetReview method',
  args:{budgetReviewResultTypeId: {type: GraphQLString},budgetId: {type: GraphQLString},partyId: {type: GraphQLString},reviewDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetReview?budgetReviewResultTypeId=${args.budgetReviewResultTypeId}budgetId=${args.budgetId}partyId=${args.partyId}reviewDate=${args.reviewDate}`, null, req);
  }
};
export {createBudgetReview};


const createBudgetReviewResultType = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetReviewResultType method',
  args:{comments: {type: GraphQLString},budgetReviewResultTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetReviewResultType?comments=${args.comments}budgetReviewResultTypeId=${args.budgetReviewResultTypeId}description=${args.description}`, null, req);
  }
};
export {createBudgetReviewResultType};


const createBudgetRevision = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetRevision method',
  args:{revisionSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},dateRevised: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetRevision?revisionSeqId=${args.revisionSeqId}budgetId=${args.budgetId}dateRevised=${args.dateRevised}`, null, req);
  }
};
export {createBudgetRevision};


const createBudgetRevisionImpact = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetRevisionImpact method',
  args:{revisionSeqId: {type: GraphQLString},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},addDeleteFlag: {type: GraphQLString},revisionReason: {type: GraphQLString},revisedAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetRevisionImpact?revisionSeqId=${args.revisionSeqId}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}addDeleteFlag=${args.addDeleteFlag}revisionReason=${args.revisionReason}revisedAmount=${args.revisedAmount}`, null, req);
  }
};
export {createBudgetRevisionImpact};


const createBudgetRole = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetRole method',
  args:{roleTypeId: {type: GraphQLString},budgetId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetRole?roleTypeId=${args.roleTypeId}budgetId=${args.budgetId}partyId=${args.partyId}`, null, req);
  }
};
export {createBudgetRole};


const createBudgetScenario = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetScenario method',
  args:{budgetScenarioId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetScenario?budgetScenarioId=${args.budgetScenarioId}description=${args.description}`, null, req);
  }
};
export {createBudgetScenario};


const createBudgetScenarioApplication = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetScenarioApplication method',
  args:{budgetScenarioApplicId: {type: GraphQLString},budgetScenarioId: {type: GraphQLString},amountChange: {type: GraphQLFloat},percentageChange: {type: GraphQLFloat},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetScenarioApplication?budgetScenarioApplicId=${args.budgetScenarioApplicId}budgetScenarioId=${args.budgetScenarioId}amountChange=${args.amountChange}percentageChange=${args.percentageChange}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}`, null, req);
  }
};
export {createBudgetScenarioApplication};


const createBudgetScenarioRule = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetScenarioRule method',
  args:{budgetScenarioId: {type: GraphQLString},budgetItemTypeId: {type: GraphQLString},amountChange: {type: GraphQLFloat},percentageChange: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetScenarioRule?budgetScenarioId=${args.budgetScenarioId}budgetItemTypeId=${args.budgetItemTypeId}amountChange=${args.amountChange}percentageChange=${args.percentageChange}`, null, req);
  }
};
export {createBudgetScenarioRule};


const createBudgetStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetStatus method',
  args:{statusId: {type: GraphQLString},budgetId: {type: GraphQLString},statusDate: {type: GraphQLString},comments: {type: GraphQLString},changeByUserLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetStatus?statusId=${args.statusId}budgetId=${args.budgetId}statusDate=${args.statusDate}comments=${args.comments}changeByUserLoginId=${args.changeByUserLoginId}`, null, req);
  }
};
export {createBudgetStatus};


const createBudgetType = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetType method',
  args:{parentTypeId: {type: GraphQLString},budgetTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetType?parentTypeId=${args.parentTypeId}budgetTypeId=${args.budgetTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {createBudgetType};


const createBudgetTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz createBudgetTypeAttr method',
  args:{budgetTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/createBudgetTypeAttr?budgetTypeId=${args.budgetTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {createBudgetTypeAttr};


const deleteBudgetItemAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBudgetItemAttribute method',
  args:{budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/deleteBudgetItemAttribute?budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteBudgetItemAttribute};


const deleteBudgetItemTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBudgetItemTypeAttr method',
  args:{budgetItemTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/deleteBudgetItemTypeAttr?budgetItemTypeId=${args.budgetItemTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteBudgetItemTypeAttr};


const deleteBudgetReviewResultType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBudgetReviewResultType method',
  args:{budgetReviewResultTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/deleteBudgetReviewResultType?budgetReviewResultTypeId=${args.budgetReviewResultTypeId}`, null, req);
  }
};
export {deleteBudgetReviewResultType};


const deleteBudgetRevision = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBudgetRevision method',
  args:{revisionSeqId: {type: GraphQLString},budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/deleteBudgetRevision?revisionSeqId=${args.revisionSeqId}budgetId=${args.budgetId}`, null, req);
  }
};
export {deleteBudgetRevision};


const deleteBudgetScenario = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBudgetScenario method',
  args:{budgetScenarioId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/deleteBudgetScenario?budgetScenarioId=${args.budgetScenarioId}description=${args.description}`, null, req);
  }
};
export {deleteBudgetScenario};


const deleteBudgetScenarioApplication = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBudgetScenarioApplication method',
  args:{budgetScenarioApplicId: {type: GraphQLString},budgetScenarioId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/deleteBudgetScenarioApplication?budgetScenarioApplicId=${args.budgetScenarioApplicId}budgetScenarioId=${args.budgetScenarioId}`, null, req);
  }
};
export {deleteBudgetScenarioApplication};


const deleteBudgetScenarioRule = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBudgetScenarioRule method',
  args:{budgetScenarioId: {type: GraphQLString},budgetItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/deleteBudgetScenarioRule?budgetScenarioId=${args.budgetScenarioId}budgetItemTypeId=${args.budgetItemTypeId}`, null, req);
  }
};
export {deleteBudgetScenarioRule};


const deleteBudgetType = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBudgetType method',
  args:{budgetTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/deleteBudgetType?budgetTypeId=${args.budgetTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {deleteBudgetType};


const deleteBudgetTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteBudgetTypeAttr method',
  args:{budgetTypeId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/deleteBudgetTypeAttr?budgetTypeId=${args.budgetTypeId}attrName=${args.attrName}`, null, req);
  }
};
export {deleteBudgetTypeAttr};


const removeBudgetAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz removeBudgetAttribute method',
  args:{budgetId: {type: GraphQLString},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/removeBudgetAttribute?budgetId=${args.budgetId}attrName=${args.attrName}`, null, req);
  }
};
export {removeBudgetAttribute};


const removeBudgetItem = {
  type: ResponseType,
  description: 'mutation for ofbiz removeBudgetItem method',
  args:{budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/removeBudgetItem?budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}`, null, req);
  }
};
export {removeBudgetItem};


const removeBudgetItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz removeBudgetItemType method',
  args:{budgetItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/removeBudgetItemType?budgetItemTypeId=${args.budgetItemTypeId}`, null, req);
  }
};
export {removeBudgetItemType};


const removeBudgetReview = {
  type: ResponseType,
  description: 'mutation for ofbiz removeBudgetReview method',
  args:{budgetReviewResultTypeId: {type: GraphQLString},budgetId: {type: GraphQLString},partyId: {type: GraphQLString},budgetReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/removeBudgetReview?budgetReviewResultTypeId=${args.budgetReviewResultTypeId}budgetId=${args.budgetId}partyId=${args.partyId}budgetReviewId=${args.budgetReviewId}`, null, req);
  }
};
export {removeBudgetReview};


const removeBudgetRevisionImpact = {
  type: ResponseType,
  description: 'mutation for ofbiz removeBudgetRevisionImpact method',
  args:{revisionSeqId: {type: GraphQLString},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/removeBudgetRevisionImpact?revisionSeqId=${args.revisionSeqId}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}`, null, req);
  }
};
export {removeBudgetRevisionImpact};


const removeBudgetRole = {
  type: ResponseType,
  description: 'mutation for ofbiz removeBudgetRole method',
  args:{roleTypeId: {type: GraphQLString},budgetId: {type: GraphQLString},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/removeBudgetRole?roleTypeId=${args.roleTypeId}budgetId=${args.budgetId}partyId=${args.partyId}`, null, req);
  }
};
export {removeBudgetRole};


const updateBudget = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudget method',
  args:{budgetId: {type: GraphQLString},comments: {type: GraphQLString},budgetTypeId: {type: GraphQLString},customTimePeriodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudget?budgetId=${args.budgetId}comments=${args.comments}budgetTypeId=${args.budgetTypeId}customTimePeriodId=${args.customTimePeriodId}`, null, req);
  }
};
export {updateBudget};


const updateBudgetAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetAttribute method',
  args:{budgetId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetAttribute?budgetId=${args.budgetId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateBudgetAttribute};


const updateBudgetItem = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetItem method',
  args:{budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},amount: {type: GraphQLFloat},purpose: {type: GraphQLString},budgetItemTypeId: {type: GraphQLString},justification: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetItem?budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}amount=${args.amount}purpose=${args.purpose}budgetItemTypeId=${args.budgetItemTypeId}justification=${args.justification}`, null, req);
  }
};
export {updateBudgetItem};


const updateBudgetItemAttribute = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetItemAttribute method',
  args:{budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},attrName: {type: GraphQLString},attrDescription: {type: GraphQLString},attrValue: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetItemAttribute?budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}attrName=${args.attrName}attrDescription=${args.attrDescription}attrValue=${args.attrValue}`, null, req);
  }
};
export {updateBudgetItemAttribute};


const updateBudgetItemType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetItemType method',
  args:{budgetItemTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetItemType?budgetItemTypeId=${args.budgetItemTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateBudgetItemType};


const updateBudgetItemTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetItemTypeAttr method',
  args:{budgetItemTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetItemTypeAttr?budgetItemTypeId=${args.budgetItemTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateBudgetItemTypeAttr};


const updateBudgetReviewResultType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetReviewResultType method',
  args:{budgetReviewResultTypeId: {type: GraphQLString},comments: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetReviewResultType?budgetReviewResultTypeId=${args.budgetReviewResultTypeId}comments=${args.comments}description=${args.description}`, null, req);
  }
};
export {updateBudgetReviewResultType};


const updateBudgetRevision = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetRevision method',
  args:{revisionSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},dateRevised: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetRevision?revisionSeqId=${args.revisionSeqId}budgetId=${args.budgetId}dateRevised=${args.dateRevised}`, null, req);
  }
};
export {updateBudgetRevision};


const updateBudgetRevisionImpact = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetRevisionImpact method',
  args:{revisionSeqId: {type: GraphQLString},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString},addDeleteFlag: {type: GraphQLString},revisionReason: {type: GraphQLString},revisedAmount: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetRevisionImpact?revisionSeqId=${args.revisionSeqId}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}addDeleteFlag=${args.addDeleteFlag}revisionReason=${args.revisionReason}revisedAmount=${args.revisedAmount}`, null, req);
  }
};
export {updateBudgetRevisionImpact};


const updateBudgetScenario = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetScenario method',
  args:{budgetScenarioId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetScenario?budgetScenarioId=${args.budgetScenarioId}description=${args.description}`, null, req);
  }
};
export {updateBudgetScenario};


const updateBudgetScenarioApplication = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetScenarioApplication method',
  args:{budgetScenarioApplicId: {type: GraphQLString},budgetScenarioId: {type: GraphQLString},amountChange: {type: GraphQLFloat},percentageChange: {type: GraphQLFloat},budgetItemSeqId: {type: GraphQLString},budgetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetScenarioApplication?budgetScenarioApplicId=${args.budgetScenarioApplicId}budgetScenarioId=${args.budgetScenarioId}amountChange=${args.amountChange}percentageChange=${args.percentageChange}budgetItemSeqId=${args.budgetItemSeqId}budgetId=${args.budgetId}`, null, req);
  }
};
export {updateBudgetScenarioApplication};


const updateBudgetScenarioRule = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetScenarioRule method',
  args:{budgetScenarioId: {type: GraphQLString},budgetItemTypeId: {type: GraphQLString},amountChange: {type: GraphQLFloat},percentageChange: {type: GraphQLFloat}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetScenarioRule?budgetScenarioId=${args.budgetScenarioId}budgetItemTypeId=${args.budgetItemTypeId}amountChange=${args.amountChange}percentageChange=${args.percentageChange}`, null, req);
  }
};
export {updateBudgetScenarioRule};


const updateBudgetStatus = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetStatus method',
  args:{statusId: {type: GraphQLString},budgetId: {type: GraphQLString},statusDate: {type: GraphQLString},comments: {type: GraphQLString},changeByUserLoginId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetStatus?statusId=${args.statusId}budgetId=${args.budgetId}statusDate=${args.statusDate}comments=${args.comments}changeByUserLoginId=${args.changeByUserLoginId}`, null, req);
  }
};
export {updateBudgetStatus};


const updateBudgetType = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetType method',
  args:{budgetTypeId: {type: GraphQLString},parentTypeId: {type: GraphQLString},hasTable: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetType?budgetTypeId=${args.budgetTypeId}parentTypeId=${args.parentTypeId}hasTable=${args.hasTable}description=${args.description}`, null, req);
  }
};
export {updateBudgetType};


const updateBudgetTypeAttr = {
  type: ResponseType,
  description: 'mutation for ofbiz updateBudgetTypeAttr method',
  args:{budgetTypeId: {type: GraphQLString},attrName: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingBudget/updateBudgetTypeAttr?budgetTypeId=${args.budgetTypeId}attrName=${args.attrName}description=${args.description}`, null, req);
  }
};
export {updateBudgetTypeAttr};
