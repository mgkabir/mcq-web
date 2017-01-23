import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionModel} from './question-model';
import { QuestionManageService} from './question-manage.service';


@Component({
  moduleId: module.id,
  selector: 'question-view',
  templateUrl:'./question-view.component.html'
})

export class QuestionViewComponent implements OnInit, OnDestroy{

  question:QuestionModel;
  subscription: any;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private service: QuestionManageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /* Go back to Question List*/
  gotoQuestionList(){
    this.router.navigate(['/questions']);
  }
  /* Go back to next Question in the  List*/
  gotoNextQuestion(){
    this.router.navigate(['/questions',this.question.questionId+1]);
  }
  /* Go back to previous Question in the  List*/
  gotoPreviousQuestion(){
    this.router.navigate(['/questions',this.question.questionId-1]);
  }

  ngOnInit(){
        this.subscription = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log("QuestionViewComponent.ngOnItnit() QID :"+id);
          this.service
            .getQuestion(id)
            .subscribe(
                res => this.question = res,
                err => this.errorMessage = err,
                ()  => this.isLoading = false);
        });
  }

  ngOnDestroy(){
    /* When subscribing to an observable in a component, you almost always arrange to unsubscribe
    when the component is destroyed. */
    this.subscription.unsubscribe();
  }

}
